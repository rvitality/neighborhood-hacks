import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import f1 from "../assets/photos/f1.jpg";
import f2 from "../assets/photos/f2.jpg";
import m1 from "../assets/photos/m1.jpg";
import m2 from "../assets/photos/m2.jpg";
import m3 from "../assets/photos/m3.jpg";
import placeholder from "../assets/photos/placeholder.png";

const StaffContext = createContext({
    staff: [],
});

const FAKE_STAFF = [
    {
        id: uuidv4(),
        name: "Juan Dela Cruz",
        age: 25,
        sex: "male",
        phone: "09349256913",
        expertise: ["Cleaning", "Plumbing", "Driving"],
        photo: m1,
        status: "working",
    },
    {
        id: uuidv4(),
        name: "James Smith",
        age: 32,
        sex: "male",
        phone: "09694512341",
        expertise: ["Grocery shopping", "Garden Maintenance", "Parenting"],
        photo: m2,
        status: "standby",
    },
    {
        id: uuidv4(),
        name: "Maria Garcia",
        age: 23,
        phone: "096236582314",
        sex: "female",
        expertise: ["Tracking Finances", "Vacuuming", "Setting and clearing the table"],
        photo: f1,
        status: "standby",
    },
    {
        id: uuidv4(),
        name: "Rohan Dawson",
        age: 36,
        phone: "09623486932",
        sex: "female",
        expertise: ["Washing and drying clothes, dishes, windows or car", "Vacuuming"],
        photo: m3,
        status: "working",
    },
    {
        id: uuidv4(),
        name: "Terrell Cameron",
        age: 39,
        phone: "09847362134",
        sex: "male",
        expertise: ["Driving", "Carpentry"],
        photo: placeholder,
        status: "working",
    },
    {
        id: uuidv4(),
        name: "Jaslene Vega",
        age: 28,
        phone: "09284766212",
        sex: "female",
        expertise: ["Cooking", "Cleaning", "Grocery shopping"],
        photo: f2,
        status: "standby",
    },
    {
        id: uuidv4(),
        name: "Charlee Winters",
        age: 23,
        phone: "09532613251",
        sex: "male",
        expertise: ["Unclogging a toilet and basic plumbing", "Driving", "Grocery shopping"],
        photo: placeholder,
        status: "working",
    },
    {
        id: uuidv4(),
        name: "Amira Beltran",
        age: 22,
        phone: "09532613251",
        sex: "female",
        expertise: [
            "Cleaning",
            "Organizing: closet, cupboard, shed, attic, garage",
            "Grocery shopping",
        ],
        photo: placeholder,
        status: "standby",
    },
    {
        id: uuidv4(),
        name: "Salvador Villegas",
        age: 27,
        phone: "09532613251",
        sex: "male",
        expertise: ["Following a recipe/basic cookery", "Grocery shopping"],
        photo: placeholder,
        status: "working",
    },
    {
        id: uuidv4(),
        name: "Brodie Grimes",
        age: 43,
        phone: "09532613251",
        sex: "male",
        expertise: ["First Aid and CPR", "Cleaning", "Plumbing", "Driving"],
        photo: placeholder,
        status: "working",
    },
];

export const StaffContextProvider = props => {
    const [staff, setStaff] = useState(FAKE_STAFF);

    const addNewStaff = user => {
        setStaff(prevState => [...prevState, user]);
    };

    const contextValue = {
        staff,
        addNewStaff,
    };

    return <StaffContext.Provider value={contextValue}>{props.children}</StaffContext.Provider>;
};

export const useStaffContext = () => useContext(StaffContext);
