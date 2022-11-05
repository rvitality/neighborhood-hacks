import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineCheck } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

import { useRequestContext } from "../../../context/RequestsContext";

import "./MedicineRequests.styles.scss";

const MedicineRequests = () => {
    const { medicineRequests } = useRequestContext();
    console.log(medicineRequests);

    return (
        <section className="medicine-requests">
            {medicineRequests.map((request, index) => {
                const {
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
                    <div key={index} className="content-container">
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
                                            {deliveryOrPickup}
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
                                <h3>
                                    Status: {status} <BsPatchCheck />
                                </h3>
                                <button className="approve-btn">Approve</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default MedicineRequests;
