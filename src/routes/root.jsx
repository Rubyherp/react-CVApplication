import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar.jsx";

function Root() {
    return (
        <>
            <div className="main-container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="CV">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Root;
