import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaListCheck } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import UseUser from "../Hooks/UseUser";
import Loading from "../pages/Loading/Loading";
import { TfiAnnouncement } from "react-icons/tfi";
import { GrUserManager } from "react-icons/gr";
import { IoTicketOutline } from "react-icons/io5";

const Dashboard = () => {
  const { isLoading, data } = UseUser();
  const { user } = useContext(AuthContext);

  if (isLoading) {
    // Handle loading state, you can return a loading spinner or any other UI
    return <Loading></Loading>;
  }

  const adminEmail = "umahtab65@gmail.com";
  const currentUserEmail = user.email;

  // Check if data is available before using find
  const filteredUsers = data.filter((users) => users.userEmail === currentUserEmail);
  const status = filteredUsers.length > 0 ? filteredUsers[0].status : null;

  let roleComponent;

  if (status === "accept") {
    roleComponent = (
      <>
        {/* Content for member */}
        <li>
          <NavLink to="/dashboard/memberProfile">
            <CgProfile />
            Member Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/showannouncement">
          <TfiAnnouncement />
           Announcement
          </NavLink>
        </li>
      </>
    );
  } else if (currentUserEmail === adminEmail) {
    roleComponent = (
      <>
        {/* Content for admin */}
      
        <li>
          <NavLink to="/dashboard/adminProfile">
            <CgProfile />
            Admin Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/agreement">
            <FaListCheck />
            Agreement Request
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/announcement">
            <FaListCheck />
            Announcement
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/managemember">
          <GrUserManager />
          Manage Member
            
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/managecupons">
          <IoTicketOutline />
          Manage Cupons
            
          </NavLink>
        </li>
      </>
    );
  } else {
    roleComponent = (
      <>
        {/* Content for user */}
       
        <li>
          <NavLink to="/dashboard/userProfile">
            <FaHome />
            User Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/showannouncement">
          <TfiAnnouncement />
           Announcement
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {roleComponent}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
