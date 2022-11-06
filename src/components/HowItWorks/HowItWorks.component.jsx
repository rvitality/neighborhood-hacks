import React from "react";

import "./HowItWorks.styles.scss";

import signupIcon from "../../assets/icons/signup.png";
import approvedIcon from "../../assets/icons/approved.png";
import orderIcon from "../../assets/icons/order.png";

const HowItWorks = () => {
    return (
        <section className="how-it-works section-px section-py">
            <div className="heading">
                <h2 className="heading-tertiary">How it Works</h2>
                <div className="heading-secondary">Do you need help? We got you!</div>
            </div>

            <div className="steps">
                <div className="steps__item">
                    <h3>Become a Member</h3>
                    <div>
                        <img src={signupIcon} alt="Signup Icon" />
                        <div className="subtext">
                            <p>
                                Register for an account. Provide genuine information as they will be
                                reviewed for approval.
                            </p>
                            <p className="notice">We don't share your personal information.</p>
                        </div>
                    </div>
                </div>

                <div className="steps__item">
                    <h3>Place your Request</h3>
                    <div>
                        <img src={orderIcon} alt="Order Icon" />
                        <p className="subtext">
                            Select which type of assistance or request you need. Fill out the given
                            form properly and make sure your account is verified.
                        </p>
                    </div>
                </div>

                <div className="steps__item">
                    <h3>Wait for Approval</h3>
                    <div>
                        <img src={approvedIcon} alt="Approved Icon" />
                        <p className="subtext">
                            Your account and request will be reviewed if your request is valid and
                            you are eligible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
