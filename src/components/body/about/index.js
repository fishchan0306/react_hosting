import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello👋🏻, I am,
                    <br /> <span className="info-name">FISH CHAN</span>
                    <br /> <span className="info-detail">I have experience working on coding.</span>
                </div>
                <div className="about-photo">
                    <div className="container"></div>
                </div>
            </div>
            <SocialContact />
        </div>
    );
}

export default About;