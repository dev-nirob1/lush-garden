import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../shared/SectionTitle';
import Blog from './Blog';
import { motion } from "framer-motion"

const Blogs = () => {
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
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('/blogs.json')
            const data = await res.json();
            return data
        }
    })
    return (
        <motion.div variants={variants} className='container mx-auto px-2 md:px-0'>
            <SectionTitle title="Interesting blog to read" />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                }
            </div>
        </motion.div>
    );
};

export default Blogs;