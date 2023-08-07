import React from "react";
import "./contact.css";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">CONTACT</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>🐈 Follow my social media, I will share more. 🐈</p>
                    <SocialContact />
                </div>
            </div>
        </div>
    );
}

export default Contact;