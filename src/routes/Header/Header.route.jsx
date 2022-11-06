import React from "react";
import { Link, Outlet } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

import "./Header.styles.scss";

import photoAdult from "../../assets/photos/photo-adult.jpg";
import photoTeen from "../../assets/photos/photo-teen.jpg";

import Deso from "deso-protocol";
import { useState } from "react";
import { useStaffContext } from "../../context/StaffContext";
const deso = new Deso();

const Header = () => {
    const { addNewStaff } = useStaffContext();
    const { login, logout, isLoggedIn } = useAuthContext();

    const [isAdmin, setIsAdmin] = useState("");

    const loginHandler = async () => {
        const { user } = await deso.identity.login();
        console.log(user);

        if (Object.keys(user).length === 0) {
            return;
        }

        const { encryptedSeedHex } = user;

        if (!encryptedSeedHex) return;

        let loggedInUser = {};

        if (
            encryptedSeedHex ===
            "05bda3f124d488d51e6d0a038472f44d9489692a1579075c00b9b9efc760449306bcf4f4ab0053027b51d250dd27911b8f5127bdaede026bcc1c31753bd72340"
        ) {
            setIsAdmin(true);
            // context, set user data
            loggedInUser = {
                id: "05bda3f124d488d51e6d0a038472f44d9489692a1579075c00b9b9efc760449306bcf4f4ab0053027b51d250dd27911b8f5127bdaede026bcc1c31753bd72340",
                name: "Mike Banning",
                address: "2143 Lourdes St. Aba Homes, 1870",
                age: 42,
                sex: "male",
                phone: "094369256913",
                expertise: ["Driving", "Plumbing", "Carpentry"],
                photo: photoAdult,
                status: "Standby",
                role: "admin",
            };
        } else {
            // context, set user data
            loggedInUser = {
                id: "53e7f6f124d9d6d711355c0bd321f14ccbd96d73142f530657ece8e9c46310c652baa3f1fd59510a2f058d56da70c5108a007aeba9df0639c44d32286bdf234c",
                name: "John Might",
                address: "2143 Sta Maria, Dolores 1410",
                age: 22,
                sex: "male",
                phone: "0941369256913",
                expertise: ["Cleaning", "Garden Maintenance"],
                photo: photoTeen,
                status: "Standby",
                role: "user",
            };
            addNewStaff(loggedInUser);
        }

        login(loggedInUser);
    };

    const logoutHandler = () => {
        logout();
    };

    return (
        <>
            <header className="header section-px">
                <Link to="/" className="logo">
                    thehelpingclub
                </Link>

                <nav>
                    <ul>
                        {isLoggedIn && (
                            <li>
                                <Link to="/request">Request</Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li>
                                <Link to="/account">Account</Link>
                            </li>
                        )}
                        {isLoggedIn && isAdmin && (
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                        )}
                    </ul>
                </nav>

                {!isLoggedIn && (
                    <Link to="#" className="primary-btn" onClick={loginHandler}>
                        Sign In
                    </Link>
                )}

                {isLoggedIn && (
                    <Link to="#" className="primary-btn" onClick={logoutHandler}>
                        Sign Out
                    </Link>
                )}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;
