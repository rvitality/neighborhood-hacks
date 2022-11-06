import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    user: {},
    isLoggedIn: false,
    login: token => {},
    logout: () => {},
});

export const AuthContextProvider = props => {
    const [user, setUser] = useState({ email: "", password: "", phone: "", address: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginStatus, setLoginStatus] = useState({});

    const navigate = useNavigate();

    const loginHandler = user => {
        console.log(user);
        setLoginStatus({ type: "success", content: "Success." });
        setUser(user);
        setIsLoggedIn(true);
        navigate("/account");
    };

    const logoutHandler = () => {
        setUser({});
        setIsLoggedIn(false);
    };

    const contextValue = {
        user,
        loginStatus,
        isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
