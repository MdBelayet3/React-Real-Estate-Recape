
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div>
            <div className=" max-w-sm md:max-w-7xl mx-auto md:p-10 p-3 bg-[#F3F3F3] text-black rounded-2xl">
                <div className="md:max-w-3xl mx-auto">
                    <h1 className="text-center text-2xl md:text-5xl underline mt-5 mb-10">About Us</h1>
                    <div className="space-y-5">
                        <h2 className="text-xl md:text-4xl">Reveal Our Company Story</h2>
                        <p className="text-sm md:text-lg">Welcome to <Link className="text-blue-500 " to="/">BelayetVista Homes</Link>, where we turn dreams into addresses. Founded with a passion for connecting people to their perfect homes, our journey began with a simple goal: to make real estate transactions smooth, transparent, and rewarding. Over the years, we have grown into a trusted name, known for our dedication to clients and deep understanding of the housing market.</p>

                        <h2 className="text-xl md:text-4xl">Introduce Our Team</h2>
                        <p className="text-sm md:text-lg">Our team is the heart of <Link className="text-blue-500 " to="/">BelayetVista Homes</Link>. Comprising experienced real estate agents, marketing specialists, and customer support professionals, we bring a wealth of expertise to every interaction. Each team member is committed to making your experience personalized and seamless, ensuring that your needs are met with care and precision.</p>

                        <h2 className="text-xl md:text-4xl">What We Offer and Who We Serve</h2>
                        <p className="text-sm md:text-lg">We specialize in residential real estate, offering a diverse portfolio of properties ranging from cozy starter homes to luxurious estates. Whether you are a first-time buyer, a seasoned investor, or looking to rent your next home, we are here to guide you every step of the way. Our services extend to families, individuals, and businesses looking for a place to thrive.</p>

                        <h2 className="text-xl md:text-4xl">Our Mission and Values</h2>
                        <p className="text-sm md:text-lg">Our mission is to build communities by helping people find homes that resonate with their needs and aspirations. Integrity, excellence, and innovation are at the core of everything we do. We believe in fostering trust and delivering results that exceed expectations.</p>

                        <h2 className="text-xl md:text-4xl">Our Commitment to Innovation</h2>
                        <p className="text-sm md:text-lg">In todays fast-paced world, we leverage cutting-edge technology to make property searches and transactions easier for our clients. From virtual tours to advanced property analytics, we use innovative tools to ensure you have all the information you need at your fingertips.</p>

                        <h2 className="text-xl md:text-4xl">Why Choose Us?</h2>
                        <p className="text-sm md:text-lg">At <Link className="text-blue-500 " to="/">BelayetVista Homes</Link>, you’re not just another client—you’re family. We pride ourselves on delivering personalized service, offering expert advice, and going the extra mile to ensure your satisfaction. Your dream home is our priority, and we would not stop until you find it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;