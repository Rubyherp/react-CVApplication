import { useContext, useState } from "react"
import { CVContext } from "../CVProvider"
import CollapsableSection from "./collaspsableSection";


function Sidebar() {

    const { state, addEducation, addExperience, updatePersonalInfo } = useContext(CVContext);

    const defaultEdu = { id: null, school: '', degree: '', startDate: '', endDate: '', location: '' };
    const defaultExp = { id: null, companyName: '', position: '', startDate: '', endDate: '', location: '', description: '' }

    const [eduInput, setEduInput] = useState(defaultEdu);
    const [expInput, setExpInput] = useState(defaultExp);

    function handleSave(e, name) {
        e.preventDefault();
        if (name === "Education") {
            addEducation(eduInput);
            setEduInput(defaultEdu);
        } else if (name === "Experience") {
            addExperience(expInput);
            setExpInput(defaultExp);
        }
    }

    function handleInputChange(e, section) {
        const { name, value } = e.target;

        if (section === "Education") {
            setEduInput({ ...eduInput, [name]: value });
        } else if (section === "Experience") {
            setEduInput({ ...expInput, [name]: value });
        }
    }

    return (
        <>
            <div className="sidebar">

                <div className="personalInfo-container">

                    <h1>Personal Details</h1>

                    <form>

                        <div className="info-name">
                            <label>
                                Full Name
                                <input name={"fullName"} value={state.personalInfo.fullName} onChange={updatePersonalInfo} />
                            </label>
                        </div>

                        <div className="info-email">
                            <label>
                                Email
                                <input name={"email"} value={state.personalInfo.email} onChange={updatePersonalInfo} />
                            </label>
                        </div>

                        <div className="info-number">
                            <label>
                                Phone Number
                                <input name={"number"} value={state.personalInfo.number} onChange={updatePersonalInfo} />
                            </label>
                        </div>

                        <div className="info-address">
                            <label>
                                Address
                                <input name={"address"} value={state.personalInfo.address} onChange={updatePersonalInfo} />
                            </label>
                        </div>

                    </form>
                </div>

                <div className="education-container">
                    <CollapsableSection title={"Education"}>
                        <form onSubmit={e => handleSave(e, "Education")}>
                            {state.education.map(item => {
                                <div>
                                    <h2>{item}</h2>
                                    <input
                                        name="Education"
                                        type="text"
                                        value={`Enter ${item}`}
                                        onChange={e => handleInputChange(e, "Education")} />
                                </div>
                            })}
                        </form>
                        <button type="submit">Save</button>
                    </CollapsableSection>

                </div>

                <div className="experience-container">
                    <CollapsableSection title={"Experience"}>
                        <form onSubmit={e => handleSave(e, "Experience")}>
                            {state.experience.map(item => {
                                <div>
                                    <h2>{item}</h2>
                                    <input
                                        name="Experience"
                                        type="text"
                                        value={`Enter ${item}`}
                                        onChange={e => handleInputChange(e, "Experience")}
                                    />
                                </div>
                            })}
                        </form>
                        <button type="submit">Save</button>
                    </CollapsableSection>
                </div>

            </div>
        </>
    )
}

export default Sidebar;
