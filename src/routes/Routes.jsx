import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "../layout/Main";

import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";

import Apartment from "../pages/Apartment/Apartment";
import AdminProfile from "../pages/Dashboard/AdminProfile";
import Agreement from "../pages/Dashboard/Agreement";
import Announcement from "../pages/Dashboard/Announcement";
import UserProfile from "../pages/Dashboard/UserProfile";
import MemberProfile from "../pages/Dashboard/MemberProfile";
import ShowAnnoucement from "../pages/Dashboard/ShowAnnoucement";
import ManageMember from "../pages/Dashboard/ManageMember";
import ManageCupons from "../pages/Dashboard/ManageCupons";



const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,

        children:
            [
                {
                    path: '/',
                    element: <Home></Home>,

                },
                {
                    path: '/apartment',
                    element:<PrivateRoute><Apartment></Apartment></PrivateRoute>,

                },
             
            
               
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },


            ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

          //shared routes

          {
            path: 'showannouncement',
            element:<ShowAnnoucement></ShowAnnoucement>,
          },
          // normal user routes
          
          {
            path: 'userProfile',
            element:<UserProfile></UserProfile>,
          },
          // Member routes
          
          {
            path: 'memberProfile',
            element:<MemberProfile></MemberProfile>,
          },
  
          // admin only routes
         
         
          {
            path: 'adminProfile',
            element:<AdminProfile></AdminProfile>,
          },
          {
            path: 'agreement',
            element:<Agreement></Agreement>,
          },
         
          {
            path: 'announcement',
            element:<Announcement></Announcement>,
          },
          {
            path: 'managemember',
            element:<ManageMember></ManageMember>,
          },
         
          {
            path: 'managecupons',
            element:<ManageCupons></ManageCupons>,
          },
         
  
        ]
      }

   

])

export default router;