import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../../../pages/home/components/Home";

const Layout = () => {
    return (
        <><Outlet /></>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />
            }
        ]
    }
]);


export { Layout, router };