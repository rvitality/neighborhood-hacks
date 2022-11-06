import React, { useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineCheck, AiFillCaretDown } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

import { useRequestContext } from "../../../context/RequestsContext";
import { useStaffContext } from "../../../context/StaffContext";

import "./MedicineRequests.styles.scss";
import { useState } from "react";

const MedicineRequests = () => {
    const { staff } = useStaffContext();
    const { medicineRequests, updateMedicinesRequest, setMedicinesRequest } = useRequestContext();

    const [isExpandStaff, setIsExpandStaff] = useState(false);

    // const [assignedPersonnel, setAssignedPersonnel] = useState(
    //     medicineRequests.assignedPersonnel || {}
    // );

    console.log(medicineRequests);

    const expandStaffHandler = () => setIsExpandStaff(prevState => !prevState);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("medicineRequests"));
        if (items) {
            setMedicinesRequest(items);
        }
    }, []);

    const approveHandler = requestID => {
        updateMedicinesRequest({ change: "status", requestID });
    };

    const selectPersonnelHandler = (requestID, assignedPersonnel) => {
        // setAssignedPersonnel(assignedPersonnel);
        updateMedicinesRequest({ change: "assigned-personnel", requestID, assignedPersonnel });
    };

    return (
        <section className="medicine-requests">
            {medicineRequests.map((request, index) => {
                const {
                    requestID,
                    assignedPersonnel,
                    user,
                    date,
                    time,
                    deliveryOrPickup,
                    comment,
                    status,
                    identificationSrc,
                    prescriptionSrc,
                    requestedMedicines,
                } = request;
                const { name, address, phone } = user;

                return (
                    <div key={requestID} className="content-container">
                        <div className="upper">
                            <div className="texts">
                                <h3>Personal Info</h3>

                                <div className="personal-info">
                                    <div className="control">
                                        <div className="control__icon">
                                            <FaUserAlt />
                                        </div>
                                        <div className="control__texts">
                                            <p className="label">Name</p>
                                            <div className="value">{name}</div>
                                        </div>
                                    </div>
                                    <div className="control">
                                        <div className="control__icon">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="control__texts">
                                            <p className="label">Phone No.</p>
                                            <div className="value">{phone}</div>
                                        </div>
                                    </div>
                                    <div className="control">
                                        <div className="control__icon">
                                            <MdOutlineEmail />
                                        </div>
                                        <div className="control__texts">
                                            <p className="label">Address</p>
                                            <div className="value">{address}</div>
                                        </div>
                                    </div>
                                    <div className="control message">
                                        <div className="control__icon">
                                            <SlEnvolopeLetter />
                                        </div>
                                        <div className="control__texts">
                                            <p className="label">Message</p>
                                            <div className="value">{comment}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="identifications">
                                <Zoom>
                                    <img src={identificationSrc} alt="Identification" />
                                </Zoom>

                                <Zoom>
                                    <img src={prescriptionSrc} alt="Prescription" />
                                </Zoom>
                            </div>
                        </div>

                        {/* Requests */}
                        <div className="requests">
                            <h3>Requested Medicines</h3>
                            <ul>
                                {requestedMedicines.map((medicine, index) => (
                                    <li key={index} className="requests__item">
                                        <AiOutlineCheck />
                                        {medicine}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Extra Info */}
                        <div className="extra-info">
                            <div>
                                <h3>Delivery / Pickup Details</h3>
                                <div className="inner-container">
                                    <div className="extra-info__group">
                                        <p>
                                            <span className="label">Receive by:</span>{" "}
                                            {deliveryOrPickup.toUpperCase()}
                                        </p>
                                    </div>
                                    <div className="extra-info__group">
                                        <p>
                                            <span className="label">Date:</span> {date}
                                        </p>
                                    </div>
                                    <div className="extra-info__group">
                                        <p>
                                            <span className="label">Time:</span> {time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="status">
                                <div className="status__text">
                                    <h3>Status:</h3>
                                    <p className="status__value">{status}</p>
                                    {status === "approved" ? (
                                        <BsPatchCheck />
                                    ) : (
                                        <MdOutlineCheckBoxOutlineBlank />
                                    )}
                                </div>
                                <button
                                    onClick={() => approveHandler(requestID)}
                                    className="approve-btn"
                                >
                                    {status === "approved" ? "Unapprove" : "Approve"}
                                </button>
                            </div>
                        </div>

                        {/* Assinged Staff*/}
                        <div className="extra-info">
                            <div>
                                <h3>Assigned Personnel</h3>

                                <div className="staff-list-container">
                                    <button
                                        className={`caret ${isExpandStaff ? "rotate" : ""}`}
                                        onClick={expandStaffHandler}
                                    >
                                        <AiFillCaretDown />
                                    </button>

                                    <div className={`staff-list ${isExpandStaff ? "expand" : ""}`}>
                                        {staff.map(person => {
                                            const {
                                                id,
                                                name,
                                                status,
                                                age,
                                                sex,
                                                phone,
                                                expertise,
                                                photo,
                                            } = person;

                                            return (
                                                <div
                                                    key={id}
                                                    className="person"
                                                    onClick={() =>
                                                        selectPersonnelHandler(requestID, person)
                                                    }
                                                >
                                                    <img src={photo} alt="" />
                                                    <div>
                                                        <p className="name-age">
                                                            {name}, {age}
                                                        </p>
                                                        <p className="expertise">
                                                            {expertise.join(", ").slice(0, 20) +
                                                                "..."}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="inner-container">
                                    <div className="extra-info__group">
                                        <p>
                                            <span className="label">Name:</span>{" "}
                                            {assignedPersonnel.name}
                                        </p>
                                    </div>
                                    <div className="extra-info__group">
                                        <p>
                                            <span className="label">Phone No.:</span>{" "}
                                            {assignedPersonnel.phone}
                                        </p>
                                    </div>
                                    <div className="extra-info__group">
                                        <p>
                                            <span className="label">Expertise:</span>{" "}
                                            {assignedPersonnel.expertise?.join(", ")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default MedicineRequests;
