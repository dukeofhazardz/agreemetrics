import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Face1 from "../assets/face1.png"
import "./HomePage.css"

const HomePage = () => {
  return (
    <Layout>
      <div className="jumbotron site-main"> 
        <div className="rotating-viewport">
          <div className="face face-1">
            <img src={Face1} alt="" />
          </div>
          <div className="face face-2">
            <img src="https://assets.codepen.io/2585/codeimage-snippet_4+%281%29.svg" alt="" />
          </div>
          <div className="face face-3">
            <img src="https://assets.codepen.io/2585/codeimage-snippet_4+%283%29.svg" alt="" />
          </div>
          <div className="face face-4">
            <img src="https://assets.codepen.io/2585/codeimage-snippet_4+%284%29.svg" alt="" />
          </div>
          <div className="face face-5">
            <img src="https://assets.codepen.io/2585/codeimage-snippet_4+%285%29.svg" alt="" />
          </div>
        </div>
        <section>
          <h1 className="hero-text">
            Meet CSS<br/><div className="gradient-text-1">Scroll Driven Animation</div>.
          </h1>
        </section>
        <section>
          <h2 className="hero-text">
            <div className="gradient-text-2">60fps</div> of user respecting <div className="gradient-text-2">style</div>.
          </h2>
        </section>
        <section>
          <h3 className="hero-text">
            Powerful & <div className="gradient-text-3">off the main thread</div>.
          </h3>
        </section>
        <section>
          <h4 className="hero-text">
            Enhance scrolling with <div className="gradient-text-4">Scrollytelling</div>.
          </h4>
        </section>
        <section>
          <h5 className="hero-text">
            See ya later <div className="gradient-text-5">Intersection Observer</div>,<br/>I won't miss you.
          </h5>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
