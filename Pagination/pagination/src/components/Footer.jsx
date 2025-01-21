import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-black/35 p-10 text-center space-y-5">
            <div className="text-4xl "><a href='#home' className='hover:text-primary'>LWANDILE MAJOLA</a></div>

            <ul className='flex justify-center gap-5 flex-wrap'>
                <li><a className='hover:text-primary' href='#about'>About</a></li>
                <li><a className='hover:text-primary' href='#experience'>Experience</a></li>
                <li><a className='hover:text-primary' href='#services'>Services</a></li>
                <li><a className='hover:text-primary' href='#portfolio'>Portfolio</a></li>
                <li><a className='hover:text-primary' href='#testimonial'>Testimonials</a></li>
                <li><a className='hover:text-primary' href='#contact'>Contact</a></li>
            </ul>

            <div className='flex justify-center gap-5'>
                <a href="https://facebook.com" target='_blank' rel='noreferrer' className="hover:text-primary"><FaFacebookF /></a>
                <a href="https://instagram.com" target='_blank' rel='noreferrer' className="hover:text-primary"><FiInstagram /></a>
                <a href="https://twitter.com" target='_blank' rel='noreferrer' className="hover:text-primary"><IoLogoTwitter /></a>
            </div>

            <div className='footer_copyright'>
                <small>&copy; LWANDILE Portfolio. All rights reserved.</small>
            </div>
        </footer >
    )
}

export default Footer