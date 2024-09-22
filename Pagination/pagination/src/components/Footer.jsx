import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-black/35 p-10 text-center space-y-5">
            <div className="text-4xl "><a href='#home' className=''>LWANDILE MAJOLA</a></div>

            <ul className='flex justify-center gap-5'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonial'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='flex justify-center'>
                <a href="https://facebook.com" target='_blank' rel='noreferrer'><FaFacebookF /></a>
                <a href="https://instagram.com" target='_blank' rel='noreferrer'><FiInstagram /></a>
                <a href="https://twitter.com" target='_blank' rel='noreferrer'><IoLogoTwitter /></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; HILTON Portfolio. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer