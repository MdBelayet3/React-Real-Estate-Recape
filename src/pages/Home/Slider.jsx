import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="flex my-10">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-6 text-xl">Discover the perfect place to call home with our curated selection of properties....</Link>
                <Link className="mr-3 text-xl">Explore stunning homes designed for modern living and timeless elegance.....</Link>
                <Link className="mr-3 text-xl">Whether you are buying, selling, or renting, we’re here to guide you every step of the way.....</Link>
                <Link className="mr-3 text-xl">Your dream home awaits—browse our listings and make it yours.....</Link>
                <Link className="mr-3 text-xl">Trusted by thousands to find the perfect property. Let’s make your dream come true!!!!!</Link>
            </Marquee>
        </div>
    );
};

export default Slider;