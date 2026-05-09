import { useContext, useState } from "react"
import { CVContext } from "../CVProvider"


function Sidebar() {

    const { state, updatePersonalInfo } = useContext(CVContext);
    const [eduExpand, setEduExpand] = useState(false);
    const [expExpand, setExpExpand] = useState(false);

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
                    <button onClick={() => { setEduExpand(!eduExpand) }}>Education</button>
                </div>

                <div className="experience-container">
                    <h1>Experience</h1>
                    <button onClick={() => { setExpExpand(!expExpand) }}>Education</button>
                </div>

            </div>
        </>
    )
}
