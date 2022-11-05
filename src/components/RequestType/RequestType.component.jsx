import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import "./RequestType.styles.scss";

const RequestType = ({ Icon, bgImg, name }) => {
    return (
        <div className="request-type">
            <div className="img-container">
                <img src={bgImg} alt="" />
                <p className="label">{name}</p>
            </div>
            <div className="links-container">
                <ul>
                    <li>
                        <Link to={name}>
                            <div>
                                <Icon />
                                <span>Ask for Assistance</span>
                            </div>
                            <HiOutlineArrowNarrowRight />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default RequestType;
