import { FaArrowRight, FaCalendarDays } from "react-icons/fa6";
import { motion } from "framer-motion"

const Blog = ({ blog }) => {
    const variants = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }
    return (
        <motion.div variants={variants} initial="initial" className="rounded-lg shadow p-3" whileInView="animate">
            <img src={blog.image} className="h-[300px] w-full rounded-t-lg" alt="blog image" />
            <div className="my-5">
                <h3 className="text-xl font-semibold text-[#285A43]">{blog.title}</h3>
                <p className="font-medium text-[#121212] opacity-80 my-3">{blog.description}...</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center gap-2">
                    <FaCalendarDays className="text-[#121212CC] opacity-80" /> <p className="text-[#121212CC] font-medium opacity-80">{blog.date}</p>
                    </div>
                    <button className="text-[#285A43] font-semibold">Read More <FaArrowRight className="inline ml-2" /></button>
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;