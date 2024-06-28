import Categories from "../../components/Categories/Categories";
import Products from "../../components/products/Products";


const Home = () => {
    return (
        <div>
           
            <Categories />
            <hr className="text-4xl" />
              <Products />
          
        </div>
    );
};

export default Home;