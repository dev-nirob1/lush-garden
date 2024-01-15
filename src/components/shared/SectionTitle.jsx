import {motion} from 'framer-motion'
const SectionTitle = ({title}) => {
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
        <motion.div variants={variants} initial="initial" whileInView="animate">
            <h2 className="text-center text-4xl font-medium mb-10 md:text-5xl text-[#285A43]">{title}</h2>
        </motion.div>
    );
};

export default SectionTitle;