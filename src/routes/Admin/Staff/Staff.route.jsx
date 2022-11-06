import React, { useState } from "react";
import { useStaffContext } from "../../../context/StaffContext";

import "./Staff.styles.scss";

const Staff = () => {
    const { staff } = useStaffContext();

    return (
        <section className="staff">
            <div className="photos">
                {staff.map(person => {
                    const { id, name, status, age, sex, phone, expertise, photo } = person;
                    return (
                        <div key={id} className="photos__item">
                            <img src={photo} alt={name} />
                            <div className="info">
                                <div className="name-age">
                                    <p>{name},</p>
                                    <p>{age}</p>
                                </div>
                                <p className="expertise">{expertise.join(", ")}</p>
                                <p className="phone">{phone}</p>
                                <div className={`status ${status}`}>
                                    <p>{status}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Staff;

// https://source.unsplash.com/1000x900/?person,female
