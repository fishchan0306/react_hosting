import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello👋🏻, I am
                    <br /> <span className="info-name">FISH CHAN</span>
                    <br /> <span className="info-detail"></span>
                </div>
                <div className="about-photo">
                    <div className="container"></div>
                </div>
            </div>
        </div>
    );
}

export default About;