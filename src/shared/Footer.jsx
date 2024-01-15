import { LuFacebook } from "react-icons/lu";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
const Footer = () => {
    const variants = {
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }
    return (
        <footer className="mt-10 md:mt-16 lg:mt-32 max-w-[1530px] mx-auto">
            <div className="bg-[#285A43] p-8 lg:p-16">
                <motion.div variants={variants} initial="initial" whileInView="animate">
                    <h3 className="text-3xl md:text-4xl font-semibold text-white flex items-center justify-center">Feel free to contact us</h3>
                    <div className="flex items-center justify-center gap-8 my-8">
                        <p className="p-3 cursor-pointer rounded-full border border-white text-white"> <CiInstagram size={26} /></p>
                        <p className="p-3 cursor-pointer rounded-full border border-white text-white"> <LuFacebook size={26} /></p>
                        <p className="p-3 cursor-pointer rounded-full border border-white text-white"> <CiTwitter size={26} /></p>
                    </div>
                </motion.div>
                <motion.ul variants={variants} initial="initial" whileInView="animate" className="flex flex-wrap items-center justify-center text-white gap-8 font-semibold">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Plants</Link></li>
                    <li><Link>Delivery</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact Us</Link></li>
                </motion.ul>
            </div>
            <motion.div variants={variants} initial="initial" whileInView="animate" className="bg-[#121212] text-white font-medium py-2 flex items-center justify-center">
                <p>Copyright © 2021 Lush. All rights reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;