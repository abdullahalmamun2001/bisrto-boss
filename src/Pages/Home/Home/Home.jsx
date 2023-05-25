import { Helmet } from "react-helmet";
import Featured from "../../Featured/Featured";
import MenuDetails from "../../MenuDetails/MenuDetails";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Details from "../Details/Details";
import Testimonial from "../Testimonial/Testimonial";
// import Menu from "../Menu/Menu";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boos || Home</title>
        
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Details></Details>
            {/* <Menu></Menu> */}
            <Featured></Featured>
            <MenuDetails></MenuDetails>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;