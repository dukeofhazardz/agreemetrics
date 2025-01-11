import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import EnvelopeCard from "../components/EnvelopeCard";
import DocumentCard from "../components/DocumentCard";
import { getItemWithExpiry, setItemWithExpiry } from "../lib/cache";
import ProfileImg from "../assets/profile.png";
import api from "../lib/api";
import moment from "moment";
import "./UserProfile.css";

const UserProfile = () => {
  const userInfo = getItemWithExpiry("user_info");
  const [envelopes, setEnvelopes] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [name, setName] = useState("");
  const accessToken = getItemWithExpiry("access_token");

  useEffect(() => {
    if (!userInfo || !accessToken) {
      window.location.href = "/";
    } else if (userInfo.name !== name) {
      setName(userInfo.name);
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchEnvelopes = async () => {
      try {
        const cachedEnvelopes = getItemWithExpiry("envelopes") || [];
        if (cachedEnvelopes.length === 0) {
          const response = await api.get("/envelopes", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setItemWithExpiry("envelopes", response.data, 3600000);
          setEnvelopes(response.data);
        } else {
          setEnvelopes(cachedEnvelopes);
        }
      } catch (error) {
        setEnvelopes([]);
      }
    };

    const fetchDocuments = async () => {
      try {
        const cachedDocuments = getItemWithExpiry("documents") || [];
        if (cachedDocuments.length === 0) {
          const response = await api.get("/documents", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setItemWithExpiry("documents", response.data, 3600000);
          setDocuments(response.data);
        } else {
          setDocuments(cachedDocuments);
        }
      } catch (error) {
        setDocuments([]);
      }
    };

    if (userInfo) {
      fetchEnvelopes();
      fetchDocuments();
    }
  }, []);

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
