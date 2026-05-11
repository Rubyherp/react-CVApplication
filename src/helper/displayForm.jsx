import GenericInput from "./genericInput";
import { CVContext } from "../CVProvider";
import { useContext, useState } from "react";

function DisplayForm({ category }) {
    //TODO: form for add Education or Experience

    const { addEducation, addExperience } = useContext(CVContext);

    const [formData, setFormData] = useState({});


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (category === "education") {
            addEducation(formData);
        } else if (category === "experience") {
            addExperience(formData);
        }

        setFormData({});

    }

    return (

        <form onSubmit={handleSubmit} id={category === "education" ? "edu-form" : "exp-form"}>
            <div>
                {(category === "education")
                    ? (
                        <>
                            <GenericInput title={"School"} name={"school"} value={formData.school || ""} onChange={handleChange} />
                            <GenericInput title={"Degree"} name={"degree"} value={formData.degree || ""} onChange={handleChange} />
                            <GenericInput title={"Start Date"} name={"startDate"} value={formData.startDate || ""} onChange={handleChange} />
                            <GenericInput title={"End Date"} name={"endDate"} value={formData.endDate || ""} onChange={handleChange} />
                            <GenericInput title={"Location"} name={"location"} value={formData.location || ""} onChange={handleChange} />
                        </>
                    )
                    : (
                        <>
                            <GenericInput title={"Company Name"} name={"companyName"} value={formData.companyName || ""} onChange={handleChange} />
                            <GenericInput title={"Position Title"} name={"position"} value={formData.position || ""} onChange={handleChange} />
                            <GenericInput title={"Start Date"} name={"startDate"} value={formData.startDate || ""} onChange={handleChange} />
                            <GenericInput title={"End Date"} name={"endDate"} value={formData.endDate || ""} onChange={handleChange} />
                            <GenericInput title={"Location"} name={"location"} value={formData.location || ""} onChange={handleChange} />
                            <textarea
                                name="description"
                                placeholder="Describe your responsibilities..."
                                className="w-full text-base bg-slate-100 rounded-lg mt-4 p-2 min-height-[100px] focus:outline-none focus:ring-2 focus:ring-slate-300 resize-y"
                                value={formData.description || ""}
                                onChange={handleChange}
                            ></textarea>
                        </>
                    )}

            </div>
        </form >
    )
}

export default DisplayForm;

