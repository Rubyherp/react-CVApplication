import { useContext, useState } from "react"
import { CVContext } from "../CVProvider"
import CollapsableSection from "../helper/collaspsableSection";
import ManagedSection from "../helper/managedSection";
import GenericButton from "../helper/genericButton";
import GenericInput from "../helper/genericInput";


function Sidebar() {

    const { state, addEducation, addExperience, updatePersonalInfo } = useContext(CVContext);
    const defaultEdu = { id: null, school: '', degree: '', startDate: '', endDate: '', location: '' };
    const defaultExp = { id: null, companyName: '', position: '', startDate: '', endDate: '', location: '', description: '' }

    const [eduInput, setEduInput] = useState(defaultEdu);
    const [expInput, setExpInput] = useState(defaultExp);
    const [addEduExpand, setAddEduExpand] = useState(null);
    const [addExpExpand, setAddExpExpand] = useState(null);

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
            <div className="flex flex-col gap-8 p-4 border border-white bg-slate-100">

                {/* Add personal info */}
                <div className="flex flex-col border border-purple-500 rounded-lg bg-white shadow-lg p-4">
                    <h1 className="text-3xl font-bold mb-4">Personal Details</h1>
                    <form className="flex flex-col gap-4">

                        <div>
                            <GenericInput title={"Full Name"} name={"fullName"} value={state.personalInfo.fullName} onChange={updatePersonalInfo} />
                        </div>

                        <div>
                            <GenericInput title={"Email"} name={"email"} value={state.personalInfo.email} onChange={updatePersonalInfo} />
                        </div>

                        <div>
                            <GenericInput title={"Phone Number"} name={"number"} value={state.personalInfo.number} onChange={updatePersonalInfo} />
                        </div>
                        <div>
                            <GenericInput title={"Address"} name={"address"} value={state.personalInfo.address} onChange={updatePersonalInfo} />
                        </div>
                    </form>
                </div>

                {/* Education */}
                <div className="flex flex-col border border-purple-500 rounded-lg bg-white shadow-lg p-4">
                    <CollapsableSection title={"Education"}>
                        <ManagedSection category={"education"} isAdding={addEduExpand}></ManagedSection>

                        {!addEduExpand &&
                            <GenericButton title={"+ Education"} fn={() => setAddEduExpand(!addEduExpand)}></GenericButton>
                        }

                        {addEduExpand &&
                            <GenericButton title={"Cancel"} fn={() => setAddEduExpand(!addEduExpand)}></GenericButton> &&

                            <GenericButton title={"Save"} fn={null}></GenericButton>
                            //TODO: should revert addEduExpand. Handle Submit form
                        }
                    </CollapsableSection>
                </div>

                {/* Experience */}
                <div className="flex flex-col border border-purple-500 rounded-lg bg-white shadow-lg p-4">
                    <CollapsableSection title={"Experience"}>
                        <ManagedSection category={"experience"} isAdding={addExpExpand}></ManagedSection>
                        {!addExpExpand &&
                            <GenericButton title={"+ Experience"} fn={() => setAddExpExpand(!addExpExpand)}></GenericButton>
                        }
                        {addExpExpand &&
                            <GenericButton title={"Cancel"} fn={() => setAddExpExpand(!addExpExpand)}></GenericButton>
                        }
                    </CollapsableSection>
                </div>

            </div>
        </>
    )
}

export default Sidebar;











{/* <form */ }
{/*     onSubmit={e => handleSave(e, "Education")} */ }
{/*     className=" flex flex-col gap-4" */ }
{/* > */ }
{/*     <input */ }
{/*         name="school" */ }
{/*         type="text" */ }
{/*         placeholder="School" */ }
{/*         value={eduInput.school} */ }
{/*         onChange={e => handleInputChange(e, "Education")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="degree" */ }
{/*         type="text" */ }
{/*         placeholder="Degree" */ }
{/*         value={eduInput.degree} */ }
{/*         onChange={e => handleInputChange(e, "Education")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="startDate" */ }
{/*         type="text" */ }
{/*         placeholder="Start Date" */ }
{/*         value={eduInput.startDate} */ }
{/*         onChange={e => handleInputChange(e, "Education")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="endDate" */ }
{/*         type="text" */ }
{/*         placeholder="End Date" */ }
{/*         value={eduInput.endDate} */ }
{/*         onChange={e => handleInputChange(e, "Education")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="location" */ }
{/*         type="text" */ }
{/*         placeholder="Location" */ }
{/*         value={eduInput.location} */ }
{/*         onChange={e => handleInputChange(e, "Education")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <button type="submit">Add Education</button> */ }
{/* </form> */ }


{/* <form */ }
{/*     onSubmit={e => handleSave(e, "Experience")} */ }
{/*     className=" flex flex-col gap-4" */ }
{/* > */ }
{/*     <input */ }
{/*         name="companyName" */ }
{/*         type="text" */ }
{/*         placeholder="Company Name" */ }
{/*         value={expInput.companyName} */ }
{/*         onChange={e => handleInputChange(e, "Experience")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="position" */ }
{/*         type="text" */ }
{/*         placeholder="Position" */ }
{/*         value={expInput.position} */ }
{/*         onChange={e => handleInputChange(e, "Experience")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="startDate" */ }
{/*         type="text" */ }
{/*         placeholder="Start Date" */ }
{/*         value={expInput.startDate} */ }
{/*         onChange={e => handleInputChange(e, "Experience")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="endDate" */ }
{/*         type="text" */ }
{/*         placeholder="End Date" */ }
{/*         value={expInput.endDate} */ }
{/*         onChange={e => handleInputChange(e, "Experience")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <input */ }
{/*         name="location" */ }
{/*         type="text" */ }
{/*         placeholder="Location" */ }
{/*         value={expInput.location} */ }
{/*         onChange={e => handleInputChange(e, "Experience")} */ }
{/*         className=" */ }
{/*             text-base  */ }
{/*             bg-slate-100  */ }
{/*             rounded-lg mt-4 */ }
{/*             p-2 */ }
{/*             " */ }
{/*     /> */ }
{/*     <textarea */ }
{/*         name="description" */ }
{/*         placeholder="Description" */ }
{/*         value={expInput.description} */ }
{/*         onChange={e => handleInputChange(e, "Experience")} */ }
{/*     /> */ }
{/*     <button type="submit">Save</button> */ }
{/* </form> */ }
