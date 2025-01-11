import React from "react";
import { Link } from "react-router-dom";
import "./DocumentCard.css";

const DocumentCard = ({ documentName, documentUri }) => {
  return (
    <div className="card">
      <div>
        <h3 title={documentName}>{documentName}</h3>
        <Link
          to={`/dashboard?document_name=${encodeURIComponent(
            documentName
          )}&document_uri=${encodeURIComponent(documentUri)}`}
        >
          <p>View Dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default DocumentCard;
