import { createContext, useReducer } from "react";
import cvReducer from "./cvReducer";

const initialState = {
    personalInfo: { fullName: 'Xiang Neng', email: 'horxiangneng123@gmail.com', number: '123456789', address: 'Singapore' },
    education: [{ id: 1, school: 'NUS', degree: 'Computer Science', startDate: 'August 2025', endDate: 'August 2029', location: 'Singapore' },],
    experience: [{ id: 1, companyName: 'Ultra pte ltd.', position: 'Software Engineer', startDate: 'January 2025', endDate: '', location: 'Singapore', description: 'Software Engineer for Ultra Pte Ltd. Built complext software for various clients in the finance and F&B industry, ranging from high-speed trading apps to odering apps' },]
}

export const CVContext = createContext();

function CVProvider({ children }) {
    const [state, dispatch] = useReducer(cvReducer, initialState);

    function addEducation(obj = null) {
        dispatch({
            type: 'addEducation',
            payload: obj
        })
    }

    function addExperience(obj = null) {
        dispatch({
            type: 'addExperience',
            payload: obj
        })
    }

    function deleteEducation(id) {
        dispatch({
            type: 'deleteEducation',
            id: id
        })
    }

    function deleteExperience(id) {
        dispatch({
            type: 'deleteExperience',
            id: id
        })
    }

    function updatePersonalInfo(e) {
        dispatch({
            type: 'updatePersonalInfo',
            field: e.target.name,
            value: e.target.value
        })
    }

    return (
        <CVContext.Provider value={{ state, addEducation, addExperience, deleteEducation, deleteExperience, updatePersonalInfo }}>
            {children}
        </CVContext.Provider>
    )
}

export default CVProvider;
