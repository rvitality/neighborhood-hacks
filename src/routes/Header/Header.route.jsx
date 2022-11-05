import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Header.styles.scss";

const Header = () => {
    return (
        <>
            <header className="header section-px">
                <Link to="/" className="logo">
                    dobetter
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/request">Request</Link>
                        </li>
                        <li>
                            <Link to="/learn">Learn</Link>
                        </li>
                        <li>
                            <Link to="/volunteer">Volunteer</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Link to="#" className="primary-btn">
                    Sign In
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;
