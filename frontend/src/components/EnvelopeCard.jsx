import React from "react";
import "./EnvelopeCard.css";

const EnvelopeCard = ({ status, emailSubject, lastModifiedDateTime }) => {
  return (
    <div className="card">
      <div>
        <h3 title={emailSubject}>{emailSubject}</h3>
        <p>{status}</p>
        <p>modified {lastModifiedDateTime}</p>
      </div>
    </div>
  );
};

export default EnvelopeCard;
