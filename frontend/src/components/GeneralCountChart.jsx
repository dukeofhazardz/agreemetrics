import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const getTotalCounts = (data) => {
  const totalClauses = data.clauses.length;
  const totalRisks = data.clauses.reduce((acc, clause) => acc + clause.risks.length, 0);
  const totalRemedies = data.clauses.reduce((acc, clause) => acc + clause.remedies.length, 0);

  return [
    { name: 'Total Clauses', value: totalClauses },
    { name: 'Total Risks', value: totalRisks },
    { name: 'Total Remedies', value: totalRemedies },
  ];
};

const GeneralCountChart = ({ data }) => {
  const counts = getTotalCounts(data);
  return (
    <div className="chart" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={counts}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeneralCountChart;
