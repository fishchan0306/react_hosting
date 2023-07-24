import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello👋🏻, I am,
                    <br /> <span className="info-name">FISH CHAN</span>.
                    <br /> I have experience working on coding.
                </div>
                <div className="about-photo">
                    <img 
                        src={require("../../../assets/coding.png")}
                        className="picture"
                        alt=""
                    />
                </div>
            </div>
            <SocialContact />
        </div>
    );
}

export default About;