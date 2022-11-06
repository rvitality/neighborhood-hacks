import React, { useState, useEffect } from "react";
// import { useMembersContext } from "../../../context/MembersContext";

import "../Staff/Staff.styles.scss";

const Members = () => {
    const [reqMembers, setReqMembers] = useState([]);
    // const { members } = useMembersContext();

    console.log(reqMembers);

    useEffect(() => {
        const members = JSON.parse(localStorage.getItem("members"));
        console.log(members);
        if (members) {
            setReqMembers(members);
        }
    }, []);

    return (
        <section className="staff">
            <div className="photos">
                {reqMembers.map(person => {
                    const { id, name, address, status, age, sex, phone, expertise, photo } = person;
                    return (
                        <div key={id} className="photos__item">
                            <img src={photo} alt={name} />
                            <div className="info">
                                <div className="name-age">
                                    <p>{name},</p>
                                    <p>{age}</p>
                                </div>
                                <p className="expertise">{address}</p>
                                {/* <p className="expertise">{expertise.join(", ")}</p> */}
                                <p className="phone">{phone}</p>
                                {/* <div className={`status ${status}`}>
                                    <p>{status}</p>
                                </div> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Members;

// https://source.unsplash.com/1000x900/?person,female
