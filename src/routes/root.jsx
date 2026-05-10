import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.jsx";

function Root() {
    return (
        <div className="min-h-screen bg-slate-100 py-8">
            <div className="container mx-auto max-w-6xl overflow-hidden flex flex-row gap-10">

                <div className="w-2/5 bg-white shadow-lg rounded-xl">
                    <Sidebar />
                </div>

                <div className="flex-1 p-8 bg-white shadow-lg rounded-xl">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Root;
