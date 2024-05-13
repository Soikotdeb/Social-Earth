import { createBrowserRouter } from "react-router-dom";




import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import NotFound from "../Page/ErrorPage/NotFound";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<NotFound></NotFound>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
       

      ]
    },
    
  ]);