import Sidebar from "./sidebar.jsx";
import CVPreview from "./CVPreview.jsx";

function Root() {
    return (
        <div className="min-h-screen bg-slate-100 py-8">
            <div className="container mx-auto max-w-6xl overflow-hidden flex flex-row gap-10">

                <div className="w-96 bg-slate-100 h-screen overflow-y-auto sticky top-0">
                    <Sidebar />
                </div>

                <div className="flex-1 bg-white shadow-lg rounded-xl">
                    <CVPreview />
                </div>

            </div>
        </div>
    )
}

export default Root;
