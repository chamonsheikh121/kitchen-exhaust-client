
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../HomePage/HomePage';
import OurService from '../ServicePage/OurService';
import ServiceDetailsPage from '../ServiceDetailsPage/ServiceDetailsPage'
import AboutUs from '../AboutUsPage/AboutUs'


const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'services',
                element: <OurService />
            },
            {
                path: 'services/:id',
                element: <ServiceDetailsPage />
            }
        ]
    }
])
export default routers;