import Sidebar from "./sidebar.jsx";
import CVPreview from "./CVPreview.jsx";

function Root() {
    return (
        <div className="flex h-screen w-full bg-slate-100 overflow-hidden">
            {/* Sidebar Container */}
            <aside className="w-[450px] h-full overflow-y-auto border-r border-slate-200 bg-white p-6">
                <Sidebar />
            </aside>

            {/* CV Preview Container */}
            <main className="flex-1 h-full overflow-y-auto p-12 bg-white">
                <div className="mx-auto w-fit shadow-2xl">
                    <CVPreview />
                </div>
            </main>
        </div>
    );
}

export default Root;
