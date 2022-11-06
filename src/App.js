import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./routes/Header/Header.route";
import Home from "./routes/Home/Home.route";
import Request from "./routes/Request/Request.route";
import Medicine from "./routes/Request/Medicine/Medicine.route";
import Admin from "./routes/Admin/Admin.route";
import MedicineRequests from "./routes/Admin/MedicineRequests/MedicineRequests.route";
import Staff from "./routes/Admin/Staff/Staff.route";
import Account from "./routes/Account/Account.route";
import { useAuthContext } from "./context/AuthContext";
import Members from "./routes/Admin/Members/Members.route";

const App = () => {
    const { isLoggedIn } = useAuthContext();

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/account" element={isLoggedIn ? <Account /> : <Navigate to="/" />} />
                <Route path="/request" element={isLoggedIn ? <Request /> : <Navigate to="" />} />
                <Route
                    path="/request/medicine"
                    element={isLoggedIn ? <Medicine /> : <Navigate tp="/" />}
                />
                <Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate to="/" />}>
                    <Route
                        path="medicine_requests"
                        element={isLoggedIn ? <MedicineRequests /> : <Navigate to="/" />}
                    />
                    <Route path="staff" element={isLoggedIn ? <Staff /> : <Navigate to="/" />} />
                    <Route
                        path="members"
                        element={isLoggedIn ? <Members /> : <Navigate to="/" />}
                    />
                </Route>
            </Route>

            <Route
                path="*"
                element={
                    <>
                        <Header />
                        <h1 className="section-px section-py">404 - There's nothing here.</h1>
                    </>
                }
            />
        </Routes>
    );
};

export default App;
