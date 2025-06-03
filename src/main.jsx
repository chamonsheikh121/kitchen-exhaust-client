import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './Pages/Router/Routers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative bg-blue-50 text-gray-700">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-transparent bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-80 pointer-events-none"></div>

      {/* Main Content */}
      <RouterProvider router={routers} />
    </div>


  </StrictMode>
)
