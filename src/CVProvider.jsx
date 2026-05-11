import { createContext, useReducer } from "react";
import cvReducer from "./cvReducer";

const initialState = {
    personalInfo: { fullName: 'Xiang Neng', email: 'horxiangneng@xn.xn', number: '123456789', address: 'Singapore' },
    education: [
        { id: 1, school: 'National University of Singapore', degree: 'Bachelor of Computing in Computer Science', startDate: '08/2025', endDate: '08/2029', location: 'Singapore' },
        { id: 2, school: 'Singapore Management University', degree: 'Bachelor of Business in Business Administration', startDate: '08/2025', endDate: '08/2029', location: 'Singapore' },
    ],
    experience: [
        { id: 1, companyName: 'Facebook', position: 'SWE Intern', startDate: 'January 2025', endDate: '', location: 'Singapore', description: 'Software Engineer Intern for FaceBook complext software for various clients in the finance and F&B industry, ranging from high-speed trading apps to odering apps' },
        { id: 2, companyName: 'Google', position: 'SWE Intern', startDate: 'January 2025', endDate: '', location: 'Singapore', description: 'SWE Intern of Google. Worked on Google docs. Touched on Google Clound Run' },
        { id: 3, companyName: 'OpenAI', position: 'Machine Learning Intern', startDate: 'January 2025', endDate: '', location: 'Singapore', description: 'Machine Learning Intern for OpenAI. Built AI Model for various clients in the finance industry; high-speed trading apps' },
    ]
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
