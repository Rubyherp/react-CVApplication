
function cvReducer(state, action) {
    switch (action.type) {

        case 'addEducation': {
            const newEdu = action.payload ||
                { id: crypto.randomUUID(), school: '', degree: '', startDate: '', endDate: '', location: '' }

            if (!newEdu.id) {
                newEdu.id = crypto.randomUUID();
            }

            return {
                ...state,
                education: [
                    ...state.education,
                    newEdu
                ]
            }
        }

        case 'addExperience': {

            const newExp = action.payload ||
                { id: crypto.randomUUID(), companyName: '', position: '', startDate: '', endDate: '', location: '', description: '' }

            if (!newExp.id) {
                newExp.id = crypto.randomUUID();
            }

            return {
                ...state,
                experience: [
                    ...state.experience,
                    newExp
                ]
            }
        }

        case 'deleteEducation': {
            return {
                ...state,
                education: state.education.filter(edu => edu.id !== action.id)
            }
        }

        case 'deleteExperience': {
            return {
                ...state,
                experience: state.experience.filter(exp => exp.id !== action.id)
            }
        }

        case 'editEducation': {
            return {
                ...state,
                education: state.education.map(edu => (
                    edu.id === action.payload.id ? { ...action, ...action.payload } : { ...action }
                ))
            }
        }

        case 'updatePersonalInfo': {
            return {
                ...state,
                personalInfo: {
                    ...state.personalInfo,
                    [action.field]: action.value
                }
            }
        }
    }
}

export default cvReducer;
