import React from "react";

import { GiMedicines, GiFruitBowl, GiReceiveMoney } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";

import RequestType from "../../components/RequestType/RequestType.component";
import "./Request.styles.scss";

const Request = () => {
    return (
        <section className="request section-px section-py">
            <h1 className="heading-primary">
                <span>Looking for assistance?</span> <br />
                We got you!
            </h1>
            <div className="types">
                <RequestType
                    name="medicine"
                    bgImg={"https://upload.echemi.com/2022/0518/1652838096248.jpg"}
                    Icon={GiMedicines}
                />
                <RequestType
                    name="food"
                    bgImg={
                        "https://media.istockphoto.com/photos/an-apple-in-a-hand-picture-id860396588?k=20&m=860396588&s=612x612&w=0&h=Sq-33uiz7ZIziWdphO4B3BdC_9POUJnxxfCx-enKmMk="
                    }
                    Icon={GiFruitBowl}
                />
                <RequestType
                    name="financial"
                    bgImg={
                        "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    }
                    Icon={GiReceiveMoney}
                />
                <RequestType
                    name="mental health"
                    bgImg={
                        "https://images.unsplash.com/photo-1553109349-c7dd33e542c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    }
                    Icon={RiMentalHealthLine}
                />
            </div>
        </section>
    );
};

export default Request;
