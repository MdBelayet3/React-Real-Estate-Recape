import { Link } from 'react-router-dom';
import icon from '../../../assets/download.png'

const Footer = () => {
    return (
        <footer className="mt-16 footer bg-[#A730E5] text-white p-10">
            <aside>
                <img className='h-16 w-16' src={icon} alt="" />
                <p>
                    BelayetVista Homes
                    <br />
                    Providing reliable residential house since 2020 
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to="/about" className="link link-hover">About us</Link>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;