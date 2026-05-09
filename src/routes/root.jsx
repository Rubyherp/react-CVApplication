import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <nav>My side bar</nav>
            <div className="main">
                <Outlet />
            </div>
        </>
    )
}

export default Root;
