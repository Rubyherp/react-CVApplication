import { useContext, useState } from "react"
import { CVContext } from "../CVProvider"
import CollapsableSection from "../helper/collaspsableSection";


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
            setExpInput({ ...expInput, [name]: value });
        }
    }

    return (
        <>
            <div className="flex flex-col border border-red-500">

                <div className="border border-blue-500">

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
                            <input
                                name="school"
                                type="text"
                                placeholder="School"
                                value={eduInput.school}
                                onChange={e => handleInputChange(e, "Education")} />
                            <input
                                name="degree"
                                type="text"
                                placeholder="Degree"
                                value={eduInput.degree}
                                onChange={e => handleInputChange(e, "Education")} />
                            <input
                                name="startDate"
                                type="text"
                                placeholder="Start Date"
                                value={eduInput.startDate}
                                onChange={e => handleInputChange(e, "Education")} />
                            <input
                                name="endDate"
                                type="text"
                                placeholder="End Date"
                                value={eduInput.endDate}
                                onChange={e => handleInputChange(e, "Education")} />
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                value={eduInput.location}
                                onChange={e => handleInputChange(e, "Education")} />
                            <button type="submit">Save</button>
                        </form>
                    </CollapsableSection>

                </div>

                <div className="experience-container">
                    <CollapsableSection title={"Experience"}>
                        <form onSubmit={e => handleSave(e, "Experience")}>
                            <input
                                name="companyName"
                                type="text"
                                placeholder="Company Name"
                                value={expInput.companyName}
                                onChange={e => handleInputChange(e, "Experience")} />
                            <input
                                name="position"
                                type="text"
                                placeholder="Position"
                                value={expInput.position}
                                onChange={e => handleInputChange(e, "Experience")} />
                            <input
                                name="startDate"
                                type="text"
                                placeholder="Start Date"
                                value={expInput.startDate}
                                onChange={e => handleInputChange(e, "Experience")} />
                            <input
                                name="endDate"
                                type="text"
                                placeholder="End Date"
                                value={expInput.endDate}
                                onChange={e => handleInputChange(e, "Experience")} />
                            <input
                                name="location"
                                type="text"
                                placeholder="Location"
                                value={expInput.location}
                                onChange={e => handleInputChange(e, "Experience")} />
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={expInput.description}
                                onChange={e => handleInputChange(e, "Experience")} />
                            <button type="submit">Save</button>
                        </form>
                    </CollapsableSection>
                </div>

            </div>
        </>
    )
}

export default Sidebar;
