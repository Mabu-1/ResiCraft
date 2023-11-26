import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop/GoToTop";



const Root = () => {
    return (
        <>
            <div className="w-full mx-auto">
                <div className="w-11/12 mx-auto">
                    <nav>
                        <Navbar />
                    </nav>
                    <div className="w-4/5 mx-auto">
                        <Outlet />
                    </div>
                </div>
                <GoToTop></GoToTop>
            </div>
            <Footer />
        </>
    );
};

export default Root;