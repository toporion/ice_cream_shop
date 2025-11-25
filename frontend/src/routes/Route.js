import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/signup',element:<Signup/>},
      {path:'/login',element:<Login/>},
    ]
  },
]);
export default router;