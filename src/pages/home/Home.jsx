import HostingFooter from "../../componentes/HostingFooter/HostingFooter";
import HostingHeader from "../../componentes/HostingHeader/HostingHeader";
import HostingPlan from "../../componentes/hostingPlan/HostingPlan";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/products/Products";
import HeroSection from "../../discoverComponent/HeroSection";
import './Home.css';


const Home = () => {
    return (
      <div>
        <hr className="text-4xl" />
        {/* project one  */}
        {/* <Products /> */}
        {/* project two  */}
        {/* <HostingHeader></HostingHeader>
            <HostingPlan></HostingPlan>
            <HostingFooter></HostingFooter> */}

        {/* project three */}
     
          <HeroSection />
         
        
      </div>
    );
};

export default Home;