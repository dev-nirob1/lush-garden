import { LuFacebook } from "react-icons/lu";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="mt-32 max-w-[1530px] mx-auto">
            <div className="bg-[#285A43] p-8 lg:p-16">
                <h3 className="text-3xl md:text-4xl font-semibold text-white flex items-center justify-center ">Feel free to contact us</h3>
                <div className="flex items-center justify-center gap-8 my-8">
                    <p className="p-3 cursor-pointer rounded-full border border-white text-white"> <CiInstagram size={26} /></p>
                    <p className="p-3 cursor-pointer rounded-full border border-white text-white"> <LuFacebook size={26} /></p>
                    <p className="p-3 cursor-pointer rounded-full border border-white text-white"> <CiTwitter size={26} /></p>
                </div>
                <ul className="flex flex-wrap items-center justify-center text-white gap-8 font-semibold">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Plants</Link></li>
                    <li><Link>Delivery</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
            </div>
            <div className="bg-[#121212] text-white font-medium py-2 flex items-center justify-center">
                <p>Copyright © 2021 Lush. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;