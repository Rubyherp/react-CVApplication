import { useContext } from "react";
import { CVContext } from "../CVProvider";

function CVPreview() {
    const { state } = useContext(CVContext);
    const personalInfo = state.personalInfo;
    const education = state.education;
    const experience = state.experience;

    return (
        <div className="flex flex-col min-h-full gap-8">
            <div className="flex flex-col py-12 w-full shrink-0 place-content-center bg-sky-900">
                <div className="flex flex-col self-center text-4xl text-white font-bold">{personalInfo.fullName}</div>
                <div className="flex gap-6 place-content-center text-lg text-white mt-4">
                    {/* {//TODO: Add icons?} */}
                    <div>{personalInfo.email}</div>
                    <div>{personalInfo.number}</div>
                    <div>{personalInfo.address}</div>
                </div>
            </div>
            <div className="flex flex-col gap-4 pl-4 pr-4">
                <div className="flex place-content-center bg-slate-200 text-2xl font-bold text-indigo-800 p-1 border rounded-lg"> Education </div>
                <ul className="text-lg">
                    {education.map(edu => (
                        <div className="flex w-full">
                            <div className="flex flex-col w-2/5 mb-2 shrink-0">
                                <div>{edu.startDate} - {edu.endDate}</div>
                                <div>{edu.location}</div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className="text-xl font-bold">{edu.school}</div>
                                <div>{edu.degree}</div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-4 pl-4 pr-4">
                <div className="flex place-content-center bg-slate-200 text-2xl font-bold text-indigo-800 p-1 border rounded-lg"> Experience </div>
                <ul className="text-lg">
                    {experience.map(exp => (
                        <div className="flex w-full">
                            <div className="flex flex-col w-2/5 mb-2 shrink-0">
                                <div>{exp.startDate} - {exp.endDate}</div>
                                <div>{exp.location}</div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className="text-xl font-bold">{exp.companyName}</div>
                                <div>{exp.position}</div>
                                <div>{exp.description}</div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CVPreview;
