import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";
import { useRequestContext } from "../../../context/RequestsContext";

import { MdHealthAndSafety } from "react-icons/md";
import { VscWarning } from "react-icons/vsc";
import { AiOutlineCheckSquare } from "react-icons/ai";

import imgPlaceholder from "../../../assets/images/img-placeholder.jpg";
import illustrationSrc from "../../../assets/images/medical-prescription.gif";

import "./Medicine.styles.scss";

const Medicine = () => {
    const { addNewMedicinesRequest } = useRequestContext();

    const nameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const commentRef = useRef();
    const medicinesRef = useRef();
    const deliveryRef = useRef();
    const pickupRef = useRef();
    const dateTimeRef = useRef();
    // const [basicInfo, setBasicInfo] = useState({ name: "", address: "", phone: "" });
    // const [enteredMedicines, setEnteredMedicines] = useState("");
    // const [enteredComment, setEnteredComment] = useState("");

    const [prescriptionImgInput, setPrescriptionImgInput] = useState();
    const [identicationImgInput, setIdenticationImgInput] = useState();

    // const basicInfoChangeHandler = e => {
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     setBasicInfo(prevState => ({ ...prevState, [key]: value }));
    // };

    const fileReader = new FileReader();

    const prescriptionImgChangeHandler = e => {
        const file = e.target.files[0];
        if (!file) return;

        fileReader.onload = e => {
            const { result } = e.target;
            setPrescriptionImgInput(result);
        };

        fileReader.readAsDataURL(file);
    };

    const identificationImgChangeHandler = e => {
        const file = e.target.files[0];
        if (!file) return;

        fileReader.onload = e => {
            const { result } = e.target;
            setIdenticationImgInput(result);
        };

        fileReader.readAsDataURL(file);
    };

    const submitHandler = e => {
        e.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredPhone = phoneRef.current.value;
        const enteredComment = commentRef.current.value;
        const enteredMedicines = medicinesRef.current.value;
        const enteredDateTime = dateTimeRef.current.value;

        const isDeliverySelected = deliveryRef.current.checked;
        // const isPickupSelected = pickupRef.current.checked;
        const deliveryOrPickup = isDeliverySelected ? "delivery" : "pickup";

        const [date, time] = enteredDateTime.split("T");

        const request = {
            user: {
                name: enteredName,
                address: enteredAddress,
                phone: enteredPhone,
            },
            comment: enteredComment,
            deliveryOrPickup,
            status: "Review",
            identificationSrc: identicationImgInput,
            prescriptionSrc: prescriptionImgInput,
            date,
            time,
        };
        console.log(request);

        addNewMedicinesRequest(request);
    };

    return (
        <section className="medicine ">
            <img
                className="cover-img"
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                alt=""
            />
            <div className="content section-py section-px">
                <div>
                    <div className="warning">
                        <VscWarning />
                        <p>You need prescriptions and other documents.</p>
                    </div>
                    <h1 className="heading-secondary">
                        <MdHealthAndSafety />
                        <span>Request for Medicines</span>
                    </h1>

                    <form onSubmit={submitHandler} className="form">
                        {/* BOX 1 */}
                        <div className="form__box">
                            <div className="number">1</div>
                            <div className="fields">
                                <div className="heading">Please fill out every fields</div>
                                <div className="inputs">
                                    <div className="control">
                                        <label htmlFor="name">Name: </label>
                                        <input ref={nameRef} id="name" type="text" />
                                    </div>
                                    <div className="control">
                                        <label htmlFor="address">Address: </label>
                                        <input ref={addressRef} id="address" type="text" />
                                    </div>
                                    <div className="control">
                                        <label htmlFor="phone">Phone No: </label>
                                        <input ref={phoneRef} id="phone" type="tel" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BOX 2 */}
                        <div className="form__box">
                            <div className="number">2</div>
                            <div className="fields">
                                <div className="heading">
                                    <p>Name of medicines</p>
                                    <small>Please separate each name with a comma.</small>
                                </div>
                                <div className="inputs">
                                    <textarea
                                        ref={medicinesRef}
                                        className="medicines-name"
                                        rows="5"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* BOX 3 */}
                        <div className="form__box">
                            <div className="number">3</div>
                            <div className="fields">
                                <div className="heading">
                                    Add comment <small>(optional)</small>
                                </div>
                                <div className="inputs">
                                    <textarea
                                        ref={commentRef}
                                        className="medicines-name"
                                        rows="5"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        {/* BOX 4 */}
                        <div className="form__box">
                            <div className="number">4</div>
                            <div className="fields">
                                <div className="heading">
                                    <p>Prescriptions</p>
                                </div>
                                <div className="inputs">
                                    <div
                                        className="img-upload-container"
                                        style={{
                                            backgroundImage: `url(${
                                                prescriptionImgInput || imgPlaceholder
                                            })`,
                                        }}
                                    >
                                        <input
                                            type="file"
                                            onChange={prescriptionImgChangeHandler}
                                            accept="image/png, image/jpeg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BOX 5 */}
                        <div className="form__box">
                            <div className="number">5</div>
                            <div className="fields">
                                <div className="heading">
                                    <p>
                                        Identification{" "}
                                        <small>
                                            (<em>Birth Certificate, Goverment-Issued ID</em>)
                                        </small>
                                    </p>
                                </div>
                                <div className="inputs">
                                    <div
                                        className="img-upload-container"
                                        style={{
                                            backgroundImage: `url(${
                                                identicationImgInput || imgPlaceholder
                                            })`,
                                        }}
                                    >
                                        <input
                                            type="file"
                                            onChange={identificationImgChangeHandler}
                                            accept="image/png, image/jpeg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOX 6 */}
                        <div className="form__box">
                            <div className="number">6</div>
                            <div className="fields">
                                <div className="heading">
                                    <span>Select if delivery or pickup</span>
                                </div>
                                <div className="inputs">
                                    <div className="radion-buttons">
                                        <div>
                                            <label htmlFor="delivery">Delivery</label>
                                            <input
                                                type="radio"
                                                id="delivery"
                                                name="mode"
                                                value="delivery"
                                                ref={deliveryRef}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pickup">Pickup</label>
                                            <input
                                                type="radio"
                                                id="pickup"
                                                name="mode"
                                                value="pickup"
                                                ref={pickupRef}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOX 7 */}
                        <div className="form__box">
                            <div className="number">7</div>
                            <div className="fields">
                                <div className="heading">
                                    <span>Pick a date and time</span>
                                </div>
                                <div className="inputs">
                                    <input type="datetime-local" ref={dateTimeRef} />
                                </div>
                            </div>
                        </div>

                        <div className="form__box">
                            <div className="submission">
                                <div>
                                    <strong>dobetter</strong> is committed to protecting and
                                    respecting your privacy, and we'll only use your personal
                                    information to administer your account and to validate if you
                                    are eligible for such requests.
                                    <br />
                                </div>
                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <aside className="right-panel">
                    <img className="illustration" src={illustrationSrc} alt="" />
                    <div className="content-info">
                        <div className="">
                            <h3 className="heading">How it works?</h3>
                            <ul>
                                <li>
                                    <AiOutlineCheckSquare />
                                    Make your report request
                                </li>
                                <li>
                                    <AiOutlineCheckSquare />
                                    Properly provide all required information
                                </li>
                                <li>
                                    <AiOutlineCheckSquare />
                                    Wait for approval
                                </li>
                            </ul>
                        </div>

                        <div className="contact">
                            <h3>Contact Us</h3>
                            <Link to=""> Chat with Support</Link>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Medicine;
