import google.generativeai as genai
from dotenv import load_dotenv
from src.utils.helper import validate_and_normalize_response
from src.settings.config import settings
import json

load_dotenv()
GOOGLE_API_KEY = settings.GOOGLE_API_KEY

generation_config = {
    "temperature": 0.8,
    "top_p": 0.95,
    "top_k": 0,
    "max_output_tokens": 2048,
}

safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT",
     "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH",
     "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
     "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT",
     "threshold": "BLOCK_MEDIUM_AND_ABOVE"}
]

tuned_model_name = "tunedModels/agreemetrics-aa2ahz0almua"

class GenAI:
    """ This class houses the functionality for generating text response from
        an image using the Google Gemini API. It initializes the API model and
        provides a method to generate a response based on the input prompt.
    """
    def __init__(self):
        """ Initializes an instance of the GenAI class
        """
        genai.configure(api_key=GOOGLE_API_KEY)
        self.model = genai.GenerativeModel(model_name=tuned_model_name,
                                           generation_config=generation_config,
                                           safety_settings=safety_settings)

    def generateJSON(self, agreement_list):
        try:
            clause_list = []
            for agreement_text in agreement_list:
                prompt = f"""
                Analyze the following agreement text and provide a structured JSON response for all the clauses present in agreement_text. The response should include:
                - A breakdown of the key clauses.
                - For each clause:
                - `clause`: The name of the clause.
                - `description`: A summary of the clause.
                - `risk_score`: A risk score from 1 (low risk) to 10 (high risk).
                - `risks`: A list of potential risks associated with the clause.
                - `remedies`: A list of suggestions to mitigate the risks.

                Agreement text:
                {agreement_text}

                Expected JSON format:
                {{
                "clauses": [
                    {{
                    "clause": "Clause Name",
                    "description": "Summary of the clause.",
                    "risk_score": X,
                    "risks": ["Risk 1", "Risk 2"],
                    "remedies": ["Remedy 1", "Remedy 2"]
                    }}
                ]
                }}
                
                Return the analysis as valid JSON. Ensure that all lists are comma-separated, and do not include trailing commas or syntax errors.
                
                Ensure you include all clauses in the Agreement text
                """
                # Generate content
                response = self.model.generate_content(prompt)
                response.resolve()

                # Parse and validate the response
                result = response.candidates[0].content.parts[0].text
                if result.startswith("```") and result.endswith("```"):
                    result = result.strip("```")
                    result = result[result.find("\n") + 1 :]
                structured_response = json.loads(result)
                clause_list.append(structured_response)
            validated_response = validate_and_normalize_response(clause_list)
            return validated_response
        except Exception as e:
            return {"error": str(e)}
