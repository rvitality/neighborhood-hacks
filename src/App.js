import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./routes/Header/Header.route";
import Home from "./routes/Home/Home.route";
import Request from "./routes/Request/Request.route";
import Medicine from "./routes/Request/Medicine/Medicine.route";
import Admin from "./routes/Admin/Admin.route";
import MedicineRequests from "./routes/Admin/MedicineRequests/MedicineRequests.route";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="/request" element={<Request />} />
                <Route path="/request/medicine" element={<Medicine />} />
                <Route path="/admin" element={<Admin />}>
                    <Route path="medicine_requests" element={<MedicineRequests />} />
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
