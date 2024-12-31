const getTotalCounts = (data) => {
  if (!data || !data.clauses) {
    return {};
  }
  const totalClauses = data.clauses.length;
  const totalRisks = data.clauses.reduce(
    (acc, clause) => acc + clause.risks.length,
    0
  );
  const totalRemedies = data.clauses.reduce(
    (acc, clause) => acc + clause.remedies.length,
    0
  );

  return {
    totalClauses: totalClauses,
    totalRisks: totalRisks,
    totalRemedies: totalRemedies,
  };
};

export default getTotalCounts