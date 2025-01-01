import React, { useState } from "react";
import Button from "./Button";

const ClauseList = ({ clauses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const clausesPerPage = 5;
  if (!Array.isArray(clauses)) {
    return <p>No clauses available.</p>;
  }

  const indexOfLastClause = currentPage * clausesPerPage;
  const indexOfFirstClause = indexOfLastClause - clausesPerPage;
  const currentClauses = clauses.slice(indexOfFirstClause, indexOfLastClause);
  const totalPages = Math.ceil(clauses.length / clausesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="clause-list-section">
      <h2 className="title">Clause Details</h2>
      {currentClauses.map((clause, index) => (
        <div key={index} className="clause-item">
          <h3>{clause.clause}</h3>
          <p>
            <strong>Description:</strong> {clause.description}
          </p>
          <p>
            <strong>Risk Score:</strong> {clause.risk_score}
          </p>
          <p>
            <strong>Risks:</strong>
          </p>
          <ul>
            {clause.risks.map((risk, idx) => (
              <li key={idx}>{risk}</li>
            ))}
          </ul>
          <p>
            <strong>Remedies:</strong>
          </p>
          <ul>
            {clause.remedies.map((remedy, idx) => (
              <li key={idx}>{remedy}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="pagination">
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ClauseList;
