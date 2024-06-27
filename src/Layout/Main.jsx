import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/navigation/NavigationBar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
             <NavigationBar />
             <Outlet></Outlet>
             <Footer />
        </div>
    );
};

export default Main;