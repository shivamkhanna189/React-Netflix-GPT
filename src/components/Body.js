
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
const Body = () => {
    
    const router = createBrowserRouter([
        {
            path: "/",
            element :<Login></Login>
        },
        {
            path: "browse",
            element : <Browse></Browse>
        }
    ])
    return (<div>
        <RouterProvider router={router}></RouterProvider>
    </div>)
}

export default Body; 
