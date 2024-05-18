import { Outlet } from "react-router-dom";
import NavBar from "../Page/NavBar/NavBar";



const Main = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    );
};

export default Main;

