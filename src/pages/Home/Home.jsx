
import Banner from "./Banner";
import Slider from "./Slider";
import Estates from "./Estates";

const Home = () => {
    return (
        <div>
            <div className=" max-w-sm md:max-w-7xl mx-auto">
                <Slider></Slider>
                <Banner></Banner>
                <Estates></Estates>
            </div>
        </div>
    );
};

export default Home;