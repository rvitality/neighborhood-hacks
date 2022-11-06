import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import { AuthContextProvider } from "./context/AuthContext";
import { RequestsContextProvider } from "./context/RequestsContext";

import { HashRouter } from "react-router-dom";
import { StaffContextProvider } from "./context/StaffContext";
import { MembersContextProvider } from "./context/MembersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <AuthContextProvider>
            <RequestsContextProvider>
                <StaffContextProvider>
                    <MembersContextProvider>
                        <App />
                    </MembersContextProvider>
                </StaffContextProvider>
            </RequestsContextProvider>
        </AuthContextProvider>
    </HashRouter>
);
