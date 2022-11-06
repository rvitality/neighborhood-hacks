import React from "react";
import { Link, Outlet } from "react-router-dom";

import { IoIosStats } from "react-icons/io";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaClipboardList, FaBoxOpen } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

import "./Admin.styles.scss";

const Admin = () => {
    return (
        <section className="admin section-py">
            <aside className="left-panel">
                <nav>
                    <ul className="first-level">
                        <li>
                            <Link to="" className="label">
                                <IoIosStats />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="staff" className="label">
                                <MdPeopleAlt />
                                Staff
                            </Link>
                        </li>
                        <li>
                            <div className="heading label">
                                <AiFillMedicineBox />
                                <span>Medicine</span>
                            </div>
                            <ul className="second-level">
                                <li>
                                    <Link to="medicine_requests" className="label">
                                        <FaClipboardList />
                                        Requests
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="label">
                                        <FaBoxOpen />
                                        Stock
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="main-content">
                <Outlet />
            </div>
        </section>
    );
};

export default Admin;
