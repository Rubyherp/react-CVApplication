import Root from "./routes/root"
import ErrorPage from "./routes/errorPage"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    }
])

export default router;
