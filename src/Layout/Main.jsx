import { Outlet } from "react-router-dom";
import NavBar from "../Page/NavBar/NavBar";
// import Footer from "../Page/footer/Footer";



const Main = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;

