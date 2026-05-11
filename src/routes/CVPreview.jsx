import { useContext } from "react";
import { CVContext } from "../CVProvider";

function CVPreview() {
    const { state } = useContext(CVContext);
    const payload = state.personalInfo;

    return (
        <div className="flex flex-col h-full border border-red-500">
            <div className="flex flex-col h-1/4 w-full place-content-center border border-blue-500 bg-sky-900">
                <div className="flex flex-col self-center text-4xl text-white font-bold">{payload.fullName}</div>
                <div className="flex gap-6 place-content-center text-lg text-white mt-4">
                    {/* {//TODO: Add icons?} */}
                    <div>{payload.email}</div>
                    <div>{payload.number}</div>
                    <div>{payload.address}</div>
                </div>
            </div>
            <div>Edu</div>
            <div>Exp</div>
        </div>
    )
}

export default CVPreview;
