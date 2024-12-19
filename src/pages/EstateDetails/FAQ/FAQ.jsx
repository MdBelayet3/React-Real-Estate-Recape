const FAQ = () => {
    return (
        <div className="bg-gray-200 md:mx-48  text-black rounded-3xl p-3 md:p-10 shadow-2xl">
            <h1 className="text-center md:text-5xl text-3xl underline font-extrabold">FAQ</h1>
            {/* question and answer 1 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">1. What types of properties does BelayetVista Homes offer?</div>
                <div className="collapse-content">
                    <p>We specialize in a variety of properties, including single-family homes, townhouses, apartments, student housing, senior living communities, and vacation rentals. Our platform is designed to cater to diverse housing needs.</p>
                </div>
            </div>
            {/* question and answer 2 */}
            <div className="collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">2. How do I search for a property on your website?</div>
                <div className="collapse-content">
                    <p>Simply use our search bar to filter properties by location, property type, budget, and other preferences. You can also explore featured listings on our homepage.</p>
                </div>
            </div>
            {/* question and answer 3 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">3. Is BelayetVista Homes available nationwide?</div>
                <div className="collapse-content">
                    <p>Yes, we provide listings from across the country. Whether you are looking for a home in the city, suburbs, or countryside, we have options to suit your preferences.</p>
                </div>
            </div>
            {/* question and answer 4 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">4. How can I schedule a property viewing?</div>
                <div className="collapse-content">
                    <p>You can request a property viewing by contacting the agent listed on the property’s page or by using the Schedule a Visit feature. We’ll coordinate with the property owner or agent to arrange a convenient time.</p>
                </div>
            </div>
            {/* question and answer 5 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">5. Can I list my property on BelayetVista Homes?</div>
                <div className="collapse-content">
                    <p>Yes! If you’re a homeowner, property manager, or agent, you can list your property on our platform. Visit the List Your Property section to get started.</p>
                </div>
            </div>
            {/* question and answer 6 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">6. Does BelayetVista Homes charge for using the website?</div>
                <div className="collapse-content">
                    <p>Browsing and searching for properties is completely free. For property listings, we offer affordable plans with additional features for premium visibility.</p>
                </div>
            </div>
            {/* question and answer 7 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">7. How can I contact customer support?</div>
                <div className="collapse-content">
                    <p>Our support team is available via email and phone. Visit the Contact Us page for more details. We’re here to assist you with any inquiries or concerns.</p>
                </div>
            </div>
            {/* question and answer 8 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">8. Are the properties on BelayetVista Homes verified?</div>
                <div className="collapse-content">
                    <p>We strive to ensure all listings are genuine and accurate. However, we recommend verifying details directly with the property owner or agent before making any commitments.</p>
                </div>
            </div>
            {/* question and answer 9 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">9. Can I apply for a rental or purchase directly through your website?</div>
                <div className="collapse-content">
                    <p>Yes, we offer tools to help you submit rental applications or connect with agents for property purchases. Look for the Apply Now or Contact Agent button on each listing.</p>
                </div>
            </div>
            {/* question and answer 10 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">10. Does BelayetVista Homes provide financial assistance or mortgage advice?</div>
                <div className="collapse-content">
                    <p>While we don’t directly offer financial services, we partner with trusted financial institutions to provide resources for mortgages and loans. Check our Resources section for more details.</p>
                </div>
            </div>
            {/* question and answer 11 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">11. Can I find properties for investment purposes?</div>
                <div className="collapse-content">
                    <p>Absolutely! We have a dedicated section for investment properties, including rental units, vacation homes, and more.</p>
                </div>
            </div>
            {/* question and answer 12 */}
            <div className="collapse collapse-arrow">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">12. How do I stay updated on new listings?</div>
                <div className="collapse-content">
                    <p>Sign up for our newsletter or set up alerts for your preferred locations and property types. You’ll receive notifications about new listings directly in your inbox.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;