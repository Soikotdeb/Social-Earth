// import { createBrowserRouter } from "react-router-dom";




// import Home from "../Page/Home/Home";
// import Main from "../Layout/Main";
// import NotFound from "../Page/ErrorPage/NotFound";




// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<Main></Main>,
//       errorElement:<NotFound></NotFound>,
//       children:[
//         {
//             path:'/',
//             element:<Home></Home>
//         },
    
        
       

//       ]
//     },
    
//   ]);


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './../Page/Home/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'home', element: <div>This is the home view</div> },
      { path: 'friend-request', element: <div>This is the friend request view</div> },
      { path: 'video', element: <div>This is the video view</div> },
      { path: 'chat', element: <div>This is the chat view</div> },
      { path: 'menu', element: <div>This is the menu view</div> },
    ],
  },
]);

export { router };
