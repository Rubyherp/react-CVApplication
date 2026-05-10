import { useState } from "react";

function CollapsableSection({ title, children }) {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <div className="border border-white">
                <button
                    onClick={() => setExpand(!expand)}
                    className="flex w-full justify-between"
                >
                    <span className="text-3xl font-bold mb-4">{title}</span>
                    <span className="text-3xl">{expand ? '▲' : '▼'}</span>
                </button>
            </div>

            {expand && (
                <div section-content>
                    {children}
                </div>
            )}
        </>
    )
}

export default CollapsableSection;
