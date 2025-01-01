import React from "react";
import Layout from "../components/Layout";
import Face1 from "../assets/face1.png";
import Face2 from "../assets/face2.png";
import Face3 from "../assets/face3.png";
import Face4 from "../assets/face4.png";
import Face5 from "../assets/face5.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="jumbotron site-main">
        <div className="rotating-viewport">
          <div className="face face-1">
            <img src={Face1} alt="Jumbotron Image" />
          </div>
          <div className="face face-2">
            <img src={Face2} alt="Jumbotron Image" />
          </div>
          <div className="face face-3">
            <img src={Face3} alt="Jumbotron Image" />
          </div>
          <div className="face face-4">
            <img src={Face4} alt="Jumbotron Image" />
          </div>
          <div className="face face-5">
            <img src={Face5} alt="Jumbotron Image" />
          </div>
        </div>
        <section>
          <h1 className="hero-text">
            Seamlessly integrates with your <br />
            <div className="gradient-text-1">DocuSign account</div>.
          </h1>
        </section>
        <section>
          <h2 className="hero-text">
            <div className="gradient-text-2">Create your profile</div> in just a
            few seconds.
          </h2>
        </section>
        <section>
          <h3 className="hero-text">
            Easily access all your{" "}
            <div className="gradient-text-3">envelopes and documents</div> from
            your profile.
          </h3>
        </section>
        <section>
          <h4 className="hero-text">
            Unlock <div className="gradient-text-4">AI-driven insights</div>{" "}
            with detailed charts and graphs.
          </h4>
        </section>
        <section>
          <h5 className="hero-text">
            Get a comprehensive overview of{" "}
            <div className="gradient-text-5">
              contract clauses, risks, and remedies{" "}
            </div>
            powered by AI.
          </h5>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
