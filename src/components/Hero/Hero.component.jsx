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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, numquam.
                    Animi consectetur facilis deleniti ipsam!
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
