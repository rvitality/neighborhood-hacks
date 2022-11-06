import { createContext, useContext, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const MembersContext = createContext({
    members: [],
});

export const MembersContextProvider = props => {
    const [members, setMembers] = useState([]);

    const addNewMember = user => {
        setMembers(prevState => [...prevState, user]);
        const newMembers = [...members, user];
        localStorage.setItem("members", JSON.stringify(newMembers));
    };

    const contextValue = {
        members,
        addNewMember,
    };

    return <MembersContext.Provider value={contextValue}>{props.children}</MembersContext.Provider>;
};

export const useMembersContext = () => useContext(MembersContext);
