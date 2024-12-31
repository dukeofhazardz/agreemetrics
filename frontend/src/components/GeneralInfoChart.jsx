import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const transformData = (data) => {
  if (!data || !data.clauses) {
    return [];
  }
  return data.clauses.map((clause, index) => ({
    name: `Clause ${index + 1}`,
    risk_score: clause.risk_score,
    num_risks: clause.risks.length,
    num_remedies: clause.remedies.length,
  }));
};

const GeneralInfoChart = ({ data }) => {
  const transformedData = transformData(data);

  return (
    <div className="chart" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={transformedData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" name="Risk Score" dataKey="risk_score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
          <Area type="monotone" name="Number of Risks" dataKey="num_risks" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
          <Area type="monotone" name="Number of Remedies" dataKey="num_remedies" stroke="#ffc658" fill="#ffc658" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeneralInfoChart;
