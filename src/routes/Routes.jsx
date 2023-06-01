import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import ShowDetails from "../pages/ShowDetails";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/show/:id",
                element: <ShowDetails/>
            }
        ]
    }
])

export default Routes