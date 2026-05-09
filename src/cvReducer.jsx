
function cvReducer(state, action) {
    switch (action.type) {

        case 'addEducation': {
            return {
                ...state,
                education: [
                    ...state.education,
                    { id: crypto.randomUUID(), school: '', degree: '', startDate: '', endDate: '', location: '' }
                ]
            }
        }

        case 'addExperience': {
            return {
                ...state,
                experience: [
                    ...state.experience,
                    { id: crypto.randomUUID(), companyName: '', position: '', startDate: '', endDate: '', location: '', description: '' }
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
                education: state.education.map(edu => {
                    edu.id === action.payload.id ? { ...action, ...action.payload } : { ...action }
                })
            }
        }
    }
}

export default cvReducer;
