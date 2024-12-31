export const myClauses = {
  value: {
    clauses: [
      {
        clause: "Non-Disclosure",
        description:
          "Parties agree to keep each other's confidential information secret.",
        risk_score: 7,
        risks: [
          "Inadequate definition of 'Confidential Information'",
          "No clear remedies for disclosure breaches",
        ],
        remedies: [
          "Define 'Confidential Information' explicitly",
          "Specify remedies for breaches including penalties",
        ],
      },
      {
        clause: "Proposed Transaction",
        description:
          "Parties agree to explore a potential business collaboration.",
        risk_score: 3,
        risks: ["Vague description of the potential collaboration"],
        remedies: ["Clarify the scope of the Proposed Transaction"],
      },
      {
        clause: "Definition of Confidential Information",
        description:
          "Defines Confidential Information as any information disclosed by one party to the other, including written, oral, and tangible forms. Excludes publicly available information or information already in the Receiving Party's possession.",
        risk_score: 7,
        risks: [
          "Broad definition of Confidential Information could lead to disputes.",
          "Exclusions for publicly available information or existing information may be difficult to prove.",
          "No mention of obligations for employees or contractors receiving information.",
        ],
        remedies: [
          "Clarify definitions of 'public domain' and 'in possession' to avoid ambiguity.",
          "Specify obligations of employees and contractors regarding confidentiality.",
        ],
      },
      {
        clause: "Confidentiality Obligations",
        description:
          "Receiving Party must not disclose, reproduce, or distribute Confidential Information except in connection with the Proposed Transaction.",
        risk_score: 6,
        risks: [
          "Limited exceptions to confidentiality obligation.",
          "No explicit mention of obligations for use of Confidential Information.",
          "No provision for security measures.",
        ],
        remedies: [
          "Specify permitted uses of Confidential Information beyond the Proposed Transaction.",
          "Require specific security measures for handling Confidential Information.",
        ],
      },
      {
        clause: "Mutual Confidentiality and Due Diligence",
        description:
          "Parties agree to treat each other confidentially, protect each other from unauthorized access, and take reasonable measures to restrain representatives from disclosing Confidential Information.",
        risk_score: 5,
        risks: [
          "General language about due diligence is insufficient.",
          "No defined limitations on access or use of Confidential Information.",
          "No mention of specific security protocols or audits.",
        ],
        remedies: [
          "Specify scope of due diligence obligations.",
          "Define restrictions on access and use of Confidential Information.",
          "Require periodic security audits.",
        ],
      },
      {
        clause: "Ownership of Confidential Information",
        description:
          "Confirms Confidential Information remains the property of the Disclosing Party and cannot be copied without consent.",
        risk_score: 4,
        risks: [
          "No mention of remedies for unauthorized copying.",
          "No clear definition of 'consent' for copying.",
        ],
        remedies: [
          "Specify remedies for unauthorized copying.",
          "Clarify the process for obtaining consent for copying Confidential Information.",
        ],
      },
      {
        clause: "Return or Destruction of Confidential Information",
        description:
          "Requires the Receiving Party to return or destroy Confidential Information upon request within seven days.",
        risk_score: 3,
        risks: [
          "No mention of responsibility for accidental or intentional destruction.",
          "No provisions for verification of destruction.",
        ],
        remedies: ["Clarify responsibility for destruction and verification."],
      },
      {
        clause: "Confidentiality Obligations",
        description:
          "The Receiving Party agrees to maintain confidentiality of the Disclosing Party's Confidential Information.",
        risk_score: 7,
        risks: [
          "Lack of clear definition of Confidential Information",
          "Inadequate security measures",
          "Enforcement issues due to lack of specific remedies",
        ],
        remedies: [
          "Define Confidential Information clearly",
          "Implement appropriate security protocols",
          "Specify remedies for breach",
        ],
      },
      {
        clause: "Disclosure Restrictions",
        description:
          "The Receiving Party may only disclose Confidential Information to their employees and consultants on a need-to-know basis.",
        risk_score: 6,
        risks: [
          "Lack of clear definition of 'need-to-know'",
          "No safeguards for data access by consultants",
          "Limited enforceability against third parties",
        ],
        remedies: [
          "Define 'need-to-know' access criteria",
          "Require signed agreements with consultants",
          "Ensure third-party agreements align with this Agreement",
        ],
      },
      {
        clause: "Exclusions from Confidentiality",
        description:
          "The Receiving Party is not bound by confidentiality for certain types of information, such as publicly available information or independently developed information.",
        risk_score: 5,
        risks: [
          "Subjective interpretation of 'publicly available'",
          "Disputes over independent development claims",
          "Lack of clear disclosure controls",
        ],
        remedies: [
          "Define specific criteria for public disclosure",
          "Establish documentation requirements for independent development",
          "Implement disclosure reporting procedures",
        ],
      },
      {
        clause: "Legal Process Disclosure",
        description:
          "The Receiving Party may disclose Confidential Information under legal process, but must notify the Disclosing Party and cooperate in limiting disclosure.",
        risk_score: 4,
        risks: [
          "Limited control over legal process requests",
          "Lack of clear notification procedures",
          "Potential conflicts between competing obligations",
        ],
        remedies: [
          "Implement data breach protocols for legal process",
          "Clearly define notification procedures",
          "Address potential conflicts with relevant legislation",
        ],
      },
      {
        clause: "Brand Protection",
        description:
          "Neither Party may use the other's name, trademarks, or proprietary information without consent.",
        risk_score: 3,
        risks: [
          "Lack of specific enforcement mechanisms",
          "Disputes over branding guidelines",
          "Potential for inadvertent misuse",
        ],
        remedies: [
          "Define specific remedies for misuse",
          "Establish clear brand usage guidelines",
          "Implement internal monitoring procedures",
        ],
      },
      {
        clause: "Remedies",
        description:
          "The Parties agree that violation of this Agreement constitutes irreparable harm, allowing for immediate injunctive relief.",
        risk_score: 6,
        risks: [
          "Overly broad interpretation of irreparable harm",
          "Potential for disputes over injunctive relief",
          "Limited financial remedies",
        ],
        remedies: [
          "Define specific criteria for irreparable harm",
          "Establish clear procedures for injunctive relief",
          "Include financial remedies for damages",
        ],
      },
      {
        clause: "Confidentiality",
        description:
          "Parties agree to disclose only necessary Confidential Information.",
        risk_score: 7,
        risks: [
          "Ambiguous definition of Confidential Information.",
          "Discretionary disclosure may lead to unintended disclosure.",
        ],
        remedies: [
          "Define Confidential Information explicitly.",
          "Establish specific disclosure criteria.",
        ],
      },
      {
        clause: "Term and Termination",
        description:
          "Agreement effective from execution, terminable with 30 days notice.",
        risk_score: 6,
        risks: [
          "Vague termination criteria.",
          "Uncertainties regarding 'Proposed Transaction' termination.",
        ],
        remedies: [
          "Clarify termination events and procedures.",
          "Define 'Proposed Transaction' for clarity.",
        ],
      },
      {
        clause: "Survival Clause",
        description: "Certain provisions survive termination for 5 years.",
        risk_score: 5,
        risks: [
          "Ambiguous scope of 'certain provisions'.",
          "Uncertainties regarding survival period.",
        ],
        remedies: [
          "Specify surviving provisions.",
          "Clarify the duration of survival.",
        ],
      },
      {
        clause: "Integration Clause",
        description: "Agreement terms become effective upon binding agreement.",
        risk_score: 4,
        risks: [
          "Potential conflicts between agreements.",
          "Unclear integration timeline.",
        ],
        remedies: [
          "Prioritize agreement hierarchy.",
          "Establish clear integration dates.",
        ],
      },
      {
        clause: "Authority to Enter Agreement",
        description: "Parties warrant authority to enter into Agreement.",
        risk_score: 3,
        risks: [
          "Potential lack of actual authority.",
          "Insufficient representation of authority.",
        ],
        remedies: [
          "Require explicit representation of authority.",
          "Verify authority independently.",
        ],
      },
      {
        clause: "Severability",
        description:
          "Invalid provisions replaced with enforceable alternatives.",
        risk_score: 2,
        risks: [
          "Unclear process for replacement.",
          "Potential loss of original intent.",
        ],
        remedies: [
          "Define replacement criteria.",
          "Document intent behind changes.",
        ],
      },
      {
        clause: "Relationship",
        description: "Parties operate on a principal-to-principal basis.",
        risk_score: 1,
        risks: ["Ambiguous nature of 'principal-to-principal'."],
        remedies: ["Clarify the nature of the relationship."],
      },
      {
        clause: "No Agency or Partnership",
        description:
          "This clause states that no agency or partnership relationship is created between the parties.",
        risk_score: 4,
        risks: ["Potential for misinterpretation of employee roles"],
        remedies: [
          "Provide explicit definitions of employee roles in a separate document",
        ],
      },
      {
        clause: "Oral Agreements Prohibited",
        description:
          "This clause prohibits additional oral agreements and requires all modifications to be in writing.",
        risk_score: 6,
        risks: [
          "Difficult to enforce against claims of oral agreements",
          "Potential for ambiguity in written modifications",
        ],
        remedies: [
          "Establish strict procedures for written modifications",
          "Include explicit language on enforcement of written modifications",
        ],
      },
      {
        clause: "Exclusive Jurisdiction in Berlin",
        description:
          "This clause grants exclusive jurisdiction to the court in Berlin for disputes arising from the agreement.",
        risk_score: 7,
        risks: [
          "Potential for conflicts with other jurisdictions",
          "Potential for inconvenience for parties outside of Berlin",
        ],
        remedies: [
          "Include language on dispute resolution procedures in a separate document",
          "Consider alternative dispute resolution mechanisms",
        ],
      },
      {
        clause: "Assignment Restrictions",
        description:
          "This clause prohibits assignment or transfer of rights arising from the agreement without written consent.",
        risk_score: 5,
        risks: [
          "Potential for disputes over consent requirements",
          "Potential for implied assignment in certain circumstances",
        ],
        remedies: [
          "Define 'assignment' and 'transfer' comprehensively",
          "Consider exceptions to assignment restrictions",
        ],
      },
    ],
  },
  expiry: 1732893404709,
};
