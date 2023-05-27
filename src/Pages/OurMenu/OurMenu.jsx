import { Helmet } from "react-helmet";

import Banner2 from "./Banner2.jsx/Banner2";
import FoodSection from "../../Shared/FoodSection/FoodSection";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boos || Our Menu</title>
            </Helmet>
            <Banner2></Banner2>
            <FoodSection heading={'order your favorite food'} foodName={'PIZZA'} title={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius pariatur odio delectus maiores quod obcaecati provident. Tempora placeat fugiat perferendis nostrum tenetur vel, omnis saepe autem praesentium maxime perspiciatis!'}></FoodSection>
            <FoodSection heading={'order your favorite food'} foodName={'BURGER'} title={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius pariatur odio delectus maiores quod obcaecati provident. Tempora placeat fugiat perferendis nostrum tenetur vel, omnis saepe autem praesentium maxime perspiciatis!'}></FoodSection>
            <FoodSection heading={'order your favorite food'} foodName={'SALAD'} title={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius pariatur odio delectus maiores quod obcaecati provident. Tempora placeat fugiat perferendis nostrum tenetur vel, omnis saepe autem praesentium maxime perspiciatis!'}></FoodSection>
            <FoodSection heading={'order your favorite food'} foodName={'SOUPS'} title={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis eius pariatur odio delectus maiores quod obcaecati provident. Tempora placeat fugiat perferendis nostrum tenetur vel, omnis saepe autem praesentium maxime perspiciatis!'}></FoodSection>
            
        </div>
    );
};

export default OurMenu;