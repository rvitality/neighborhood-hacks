import React from "react";
import { useAuthContext } from "../../context/AuthContext";

import { FaUserAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbHierarchy2 } from "react-icons/tb";

// import timelineSVG from "../../assets/timeline.svg";

import "./Account.styles.scss";
import { useState } from "react";

const Account = () => {
    const [showProfile, setShowProfile] = useState(true);
    const { user } = useAuthContext();

    const { name, age, role, photo, expertise, address, phone } = user;

    const changeViewHandler = view => {
        if (view === "profile") {
            setShowProfile(true);
        } else {
            setShowProfile(false);
        }
    };
    console.log(showProfile);

    return (
        <section className="account section-px section-py">
            <div>
                <nav>
                    <ul>
                        <li>
                            <button
                                href="#"
                                className={`${showProfile ? "highlight" : ""}`}
                                onClick={() => changeViewHandler("profile")}
                            >
                                Profie
                            </button>
                        </li>
                        <li>
                            <button
                                href="#"
                                className={`${!showProfile ? "highlight" : ""}`}
                                onClick={() => changeViewHandler("requests")}
                            >
                                Requests
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {showProfile ? (
                <div className="profile">
                    <div className="profile-photo">
                        <img src={photo} alt={name} />
                    </div>

                    <div className="controls">
                        <div className="control">
                            <div className="control__icon">
                                <FaUserAlt />
                            </div>
                            <div className="control__texts">
                                <p className="label">Name</p>
                                <div className="value">{name || "N/A"}</div>
                            </div>
                        </div>
                        <div className="control">
                            <div className="control__icon">
                                <AiOutlineCalendar />
                            </div>
                            <div className="control__texts">
                                <p className="label">Age</p>
                                <div className="value">{age || "N/A"}</div>
                            </div>
                        </div>

                        <div className="control">
                            <div className="control__icon">
                                <TbHierarchy2 />
                            </div>
                            <div className="control__texts">
                                <p className="label">Role</p>
                                <div className="value">{role || "N/A"}</div>
                            </div>
                        </div>

                        <div className="control">
                            <div className="control__icon">
                                <MdLocationOn />
                            </div>
                            <div className="control__texts">
                                <p className="label">Address</p>
                                <div className="value">{address || "N/A"}</div>
                            </div>
                        </div>

                        <div className="control">
                            <div className="control__icon">
                                <MdCall />
                            </div>
                            <div className="control__texts">
                                <p className="label">Phone no.</p>
                                <div className="value">{phone || "N/A"}</div>
                            </div>
                        </div>

                        <div className="control">
                            <div className="control__icon">
                                <GiSkills />
                            </div>
                            <div className="control__texts">
                                <p className="label">Skills</p>
                                <div className="value">{expertise.join(", ") || "N/A"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="requests">Request</div>
            )}
        </section>
    );
};

export default Account;
