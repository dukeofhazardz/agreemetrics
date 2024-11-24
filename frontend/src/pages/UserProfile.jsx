import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import useUserInfo from "../hooks/UserInfo";
import EnvelopeCard from "../components/EnvelopeCard";
import { getItemWithExpiry, setItemWithExpiry } from "../lib/cache";
import ProfileImg from "../assets/profile.png";
import api from "../lib/api";
import moment from "moment";
import "./UserProfile.css";
import DocumentCard from "../components/DocumentCard";

const UserProfile = () => {
  const navigate = useNavigate();
  const userInfo = useUserInfo();
  const [envelopes, setEnvelopes] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else if (userInfo.name !== name) {
      setName(userInfo.name);
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    const fetchEnvelopes = async () => {
      try {
        const cachedEnvelopes = getItemWithExpiry("envelopes") || [];
        if (cachedEnvelopes.length === 0) {
          const response = await api.get("/envelopes");
          setItemWithExpiry("envelopes", response.data, 3600000);
          setEnvelopes(response.data);
        } else {
          setEnvelopes(cachedEnvelopes);
        }
      } catch (error) {
        console.error("Error fetching envelopes:", error);
        setEnvelopes([]);
      }
    };

    const fetchDocuments = async () => {
      try {
        const cachedDocuments = getItemWithExpiry("documents") || [];
        if (cachedDocuments.length === 0) {
          const response = await api.get("/documents");
          setItemWithExpiry("documents", response.data, 3600000);
          setDocuments(response.data);
        } else {
          setDocuments(cachedDocuments);
        }
      } catch (error) {
        console.error("Error fetching envelopes:", error);
        setDocuments([]);
      }
    }

    if (userInfo) {
      fetchEnvelopes();
      fetchDocuments();
    }
  }, [userInfo]);

  return (
    <Layout>
      <div className="container">
        <section className="profile-section">
          <div className="profile">
            <img src={ProfileImg} alt="Profile Image" />
            <h1>{name}</h1>
          </div>

          <div className="stats">
            <div className="circle">
              <h2>{envelopes.length}</h2>
              <p>{envelopes.length === 1 ? "Envelope" : "Envelopes"}</p>
            </div>
            <div className="circle">
              <h2>{documents.length}</h2>
              <p>{documents.length === 1 ? "Document" : "Documents"}</p>
            </div>
          </div>
        </section>

        <section className="envelope-section">
          <h2>My Envelopes</h2>
          <div className="envelopes-container">
            {!envelopes || envelopes.length === 0 ? (
              <p>No envelopes found.</p>
            ) : (
              envelopes.map((envelope) => (
                <EnvelopeCard
                  key={envelope.envelopeId}
                  status={envelope.status}
                  emailSubject={envelope.emailSubject}
                  lastModifiedDateTime={moment(
                    envelope.lastModifiedDateTime
                  ).fromNow()}
                />
              ))
            )}
          </div>
        </section>

        <section className="document-section">
          <h2>My Documents</h2>
          <div className="documents-container">
            {!documents || documents.length === 0 ? (
              <p>No document found.</p>
            ) : (
              documents.map((document) => (
                <DocumentCard
                  key={document.document_id}
                  documentName={document.document_name}
                  documentUri={document.document_uri}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UserProfile;
