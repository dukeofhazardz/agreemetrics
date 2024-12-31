import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const calculateRiskCounts = (data) => {
  const riskCounts = {
    low: 0,
    medium: 0,
    high: 0,
  };

  data.clauses.forEach((clause) => {
    if (clause.risk_score >= 1 && clause.risk_score <= 3) {
      riskCounts.low += 1;
    } else if (clause.risk_score >= 4 && clause.risk_score <= 6) {
      riskCounts.medium += 1;
    } else if (clause.risk_score >= 7 && clause.risk_score <= 9) {
      riskCounts.high += 1;
    }
  });

  return riskCounts;
};

const RiskScoreChart = ({ data }) => {
  const riskCounts = calculateRiskCounts(data);
  const pieData = [
    { name: 'Low Risks', value: riskCounts.low },
    { name: 'Medium Risks', value: riskCounts.medium },
    { name: 'High Risks', value: riskCounts.high },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="chart" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskScoreChart;
