import GenericInput from "./genericInput";

function DisplayForm({ category }) {
    //TODO: form for add Education or Experience


    return (

        <div>
            {(category === "education")
                ? (
                    <form>
                        <GenericInput title={"School"} name={"school"} />
                        <GenericInput title={"Degree"} name={"degree"} />
                        <GenericInput title={"Start Date"} name={"startDate"} />
                        <GenericInput title={"End Date"} name={"endDate"} />
                        <GenericInput title={"Location"} name={"location"} />
                    </form>
                )
                : (
                    <form>
                        <GenericInput title={"Company Name"} name={"companyName"} />
                        <GenericInput title={"Position Title"} name={"position"} />
                        <GenericInput title={"Start Date"} name={"startDate"} />
                        <GenericInput title={"End Date"} name={"endDate"} />
                        <GenericInput title={"Location"} name={"location"} />
                        <textarea
                            name="description"
                            placeholder="Describe your responsibilities..."
                            className="w-full text-base bg-slate-100 rounded-lg mt-4 p-2 min-height-[100px] focus:outline-none focus:ring-2 focus:ring-slate-300 resize-y"
                        ></textarea>
                    </form>
                )}

        </div>
    )
}

export default DisplayForm;

