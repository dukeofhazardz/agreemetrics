import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { getItemWithExpiry, setItemWithExpiry } from "../lib/cache";
import api from "../lib/api";
import "./Dashboard.css";
import GeneralCountChart from "../components/GeneralCountChart";
import GeneralInfoChart from "../components/GeneralInfoChart";
import RiskScoreChart from "../components/RiskScoreChart";
import ClauseList from "../components/ClauseList";
import getTotalCounts from "../lib/totalCount";

const Dashboard = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const documentName = queryParams.get("document_name");
  const documentUri = queryParams.get("document_uri");
  const [clauses, setClauses] = useState([]);
  const [counts, setCounts] = useState({});
  const userInfo = getItemWithExpiry("user_info");
  const accessToken = getItemWithExpiry("access_token");

  useEffect(() => {
    if (!userInfo || !accessToken) {
      window.location.href = "/";
    } else if (userInfo.name !== name) {
      setName(userInfo.name);
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchClauses = async () => {
      try {
        const cachedClauses = getItemWithExpiry("clauses") || [];
        if (cachedClauses.length === 0) {
          const response = await api.get(
            `/process?document_name=${documentName}&document_uri=${documentUri}`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
          );
          setItemWithExpiry("clauses", response.data, 3600000);
          setClauses(response.data || []);
          setCounts(getTotalCounts(response.data));
        } else {
          setClauses(cachedClauses);
          setCounts(getTotalCounts(cachedClauses));
        }
      } catch (error) {
        setClauses([]);
      }
    };
    if (userInfo) {
      fetchClauses();
    }
  }, [documentName, documentUri]);

  return (
    <Layout>
      <section className="dashboard-section">
        {!clauses || clauses.length === 0 ? (
          <div className="spinner"></div>
        ) : (
          <div className="dashboard-grid">
            <div className="box box1">
              <div className="box-content">
                <h2 className="clauses">{counts.totalClauses}</h2>
                <h3 className="clauses">Clauses</h3>
              </div>
            </div>
            <div className="box box2">
              <div className="box-content">
                <h2 className="risks">{counts.totalRisks}</h2>
                <h3 className="risks">Risks</h3>
              </div>
            </div>
            <div className="box box3">
              <div className="box-content">
                <h2 className="remedies">{counts.totalRemedies}</h2>
                <h3 className="remedies">Remedies</h3>
              </div>
            </div>
            <div className="box box4">
              <div className="box-content chart">
                <h3>Clause Risk and Remedies Count</h3>
                <GeneralCountChart data={clauses} />
              </div>
            </div>
            <div className="box box5">
              <div className="box-content chart">
                <h3>Risk Scores</h3>
                <RiskScoreChart data={clauses} />
              </div>
            </div>
            <div className="box box6">
              <div className="box-content chart">
                <h3>Clause Risk Analysis</h3>
                <GeneralInfoChart data={clauses} />
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="clause-list-section">
        {!clauses || clauses.length === 0 ? (
          <div className="spinner"></div>
        ) : (
          <ClauseList clauses={clauses.clauses} />
        )}
      </section>
    </Layout>
  );
};

export default Dashboard;
