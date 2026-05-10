import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.jsx";

function Root() {
    return (
        /* 1. bg-slate-100 gives the "outside" gap a light gray color */
        <div className="min-h-screen bg-slate-100 py-8">

            {/* 2. The Actual Container */}
            <div className="container mx-auto max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden flex border border-gray-200">

                {/* Sidebar */}
                <div className="w-64 border-r border-gray-100 bg-gray-50">
                    <Sidebar />
                </div>

                {/* Main Content (CV) */}
                <div className="flex-1 p-8">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Root;
