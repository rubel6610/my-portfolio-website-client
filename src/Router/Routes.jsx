import { createBrowserRouter } from "react-router-dom"
import Root from "../RootLayout/Root"
import HomePage from "../Pages/HomePage"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            }
        ]
    }
])