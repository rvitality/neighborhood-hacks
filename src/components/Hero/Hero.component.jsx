import React from "react";
import { Link } from "react-router-dom";

import "./Hero.styles.scss";

import heroIllustration from "../../assets/images/hero-illustration.png";

const Hero = () => {
    return (
        <section className="hero section-px section-py">
            <div className="left">
                <h1 className="heading-primary">
                    Help others <br /> & <span style={{ color: "#27BBAD" }}>do better</span> <br />{" "}
                    with us.
                </h1>
                <p className="section-paragraph">
                    Some do it because they believe it’s right, some do it because they believe in
                    karma or that it’ll come back to them, and some help because they want to be
                    appreciated for their efforts.
                </p>
                <Link to="" className="primary-btn">
                    Learn More
                </Link>
            </div>
            <div className="right">
                <img src={heroIllustration} alt="Kindness Illustration" />
            </div>
        </section>
    );
};

export default Hero;
