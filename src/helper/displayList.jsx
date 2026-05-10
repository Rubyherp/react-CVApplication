import { useContext } from "react";
import { CVContext } from "../CVProvider";

function DisplayList({ category }) {

    const { state } = useContext(CVContext);
    const payload = state[category];

    return (
        <>
            <ul className="flex flex-col gap-4 text-lg font-medium">
                {payload.map((item) => (
                    <li className="p-2 bg-slate-100 rounded-lg">
                        {category === "education"
                            ? item.school
                            : category === "experience"
                                ? item.companyName
                                : null
                        }

                    </li>
                    //TODO: Add a option to remove
                ))}
            </ul>
        </>
    )

}

export default DisplayList;
