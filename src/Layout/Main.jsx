import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
    const location=useLocation()
    // console.log(location);
    const nothingHeaderFooter=location.pathname.includes('login')
    // console.log(nothingHeaderFooter);
    return (
        <div>
            {nothingHeaderFooter ||<Navbar></Navbar>}
            <Outlet></Outlet>
            {nothingHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;