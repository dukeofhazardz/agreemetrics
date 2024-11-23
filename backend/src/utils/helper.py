import pdfplumber

def read_pdf_file(pdf_path):
    """
    Reads text data from a pdf file.

    Parameters:
        file_path (str): The path to the pdf file to be read.

    Returns:
        str: The text content read from the pdf file.
    """
    with pdfplumber.open(pdf_path) as pdf:
        pages_text = []
        for page in pdf.pages:
            page_text = page.extract_text() or ""
            pages_text.append(page_text)
        return pages_text


def validate_and_normalize_response(responses):
    """
    Validates and normalizes a list of JSON responses to ensure they match the expected structure
    and consolidates them into a single JSON format.

    Parameters:
        responses (list): A list of dictionaries, each containing clauses.

    Returns:
        dict: The validated and normalized response with all clauses combined.
    """
    # Expected keys in each clause
    required_keys = ["clause", "description", "risk_score", "risks", "remedies"]

    try:
        # Consolidate all clauses into a single list
        all_clauses = []
        for response in responses:
            clauses = response.get("clauses", [])  # Get clauses or default to an empty list
            for clause in clauses:
                # Ensure all required keys are present in each clause
                for key in required_keys:
                    if key not in clause:
                        # Default values for missing keys
                        if key == "risk_score":
                            clause[key] = 5  # Default risk score
                        elif key in ["risks", "remedies"]:
                            clause[key] = []  # Default to empty list
                        else:
                            clause[key] = "N/A"  # Default for text fields
                
                # Ensure risk_score is within range (1 to 10)
                clause["risk_score"] = max(1, min(10, clause.get("risk_score", 5)))

                # Add validated clause to the consolidated list
                all_clauses.append(clause)

        # Return the combined structure
        return {"clauses": all_clauses}
    except Exception as e:
        return {"error": f"Invalid response format: {str(e)}"}

