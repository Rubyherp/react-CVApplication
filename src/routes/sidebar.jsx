import { useContext, useState } from "react"
import { CVContext } from "../CVProvider"
import CollapsableSection from "../components/collaspsableSection";
import ManagedSection from "../components/managedSection";
import GenericButton from "../components/genericButton";
import GenericInput from "../components/genericInput";


function Sidebar() {

    const { state, updatePersonalInfo } = useContext(CVContext);

    const [addEduExpand, setAddEduExpand] = useState(null);
    const [addExpExpand, setAddExpExpand] = useState(null);

    return (
        <>
            <div className="flex flex-col gap-8 p-4 bg-transparent h-full">

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
                            <div className="flex gap-2 mt-4 justify-between">
                                <GenericButton title={"Cancel"} fn={() => setAddEduExpand(!addEduExpand)}></GenericButton>
                                <GenericButton form={"edu-form"} type="submit" title={"Save"}></GenericButton>
                            </div>
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

                        {addExpExpand && (
                            <div className="flex gap-2 mt-4 justify-between">
                                <GenericButton title={"Cancel"} fn={() => setAddExpExpand(!addExpExpand)}></GenericButton>
                                <GenericButton form={"exp-form"} type="submit" title={"Save"}></GenericButton>
                            </div>
                        )
                        }
                    </CollapsableSection>
                </div>

            </div>
        </>
    )
}

export default Sidebar;
