import { createBrowserRouter } from "react-router-dom";
import Root from "../RootLayout/Root";
import ProjectDetails from "../Pages/Projects/ProjectDetails";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        
    },
    {
        path:"project/:id",
        element:<ProjectDetails/>
    }
])