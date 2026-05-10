import { useState } from "react";

function CollapsableSection({ title, children }) {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <div className="section-header">
                <button onClick={() => setExpand(!expand)}> {title} <span>{expand ? '▲' : '▼'}</span> </button>
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
