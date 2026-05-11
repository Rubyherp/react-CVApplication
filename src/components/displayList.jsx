import { useContext } from "react";
import { CVContext } from "../CVProvider";
import GenericButton from "./genericButton";

function DisplayList({ category }) {

    const { state, deleteEducation, deleteExperience } = useContext(CVContext);
    const payload = state[category];
    return (
        <ul className="flex flex-col gap-2 mt-4">
            {payload.map((item) => (
                <li
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-lg group hover:border-slate-300 transition-all"
                >
                    <span className="truncate pr-4 text-slate-700 font-semibold">
                        {category === "education" ? item.school : item.companyName}
                    </span>

                    <button
                        title="Delete item"
                        className="text-slate-400 hover:text-red-500 transition-colors font-bold px-2"
                        onClick={() => {
                            category === "education"
                                ? deleteEducation(item.id)
                                : deleteExperience(item.id);
                        }}
                    >
                        ✕
                    </button>
                </li>
            ))}
        </ul>
    );

}

export default DisplayList;
