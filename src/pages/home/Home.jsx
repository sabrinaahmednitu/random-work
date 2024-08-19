import HostingFooter from "../../componentes/HostingFooter/HostingFooter";
import HostingHeader from "../../componentes/HostingHeader/HostingHeader";
import HostingPlan from "../../componentes/hostingPlan/HostingPlan";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/products/Products";


const Home = () => {
    return (
        <div>
            <hr className="text-4xl" />
            {/* <Products /> */}
            <HostingHeader></HostingHeader>
            <HostingPlan></HostingPlan>
            <HostingFooter></HostingFooter>
        </div>
    );
};

export default Home;