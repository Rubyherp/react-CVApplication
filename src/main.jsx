import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './routes/root.jsx'
import ErrorPage from './routes/errorPage.jsx'
import CVProvider from './CVProvider.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CVProvider>
            <RouterProvider router={router} />
        </CVProvider>
    </StrictMode>,
)
