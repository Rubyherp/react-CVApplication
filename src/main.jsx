import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import CVProvider from './CVProvider.jsx'
import router from './router.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CVProvider>
            <RouterProvider router={router} />
        </CVProvider>
    </StrictMode>,
)
