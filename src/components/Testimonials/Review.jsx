import {motion} from 'framer-motion'
const Review = ({ review }) => {
    const variants = {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }
    return (
        <motion.div variants={variants} initial="initial" whileInView="animate" style={{ background: `url(${review.backgroundImage}), lightgray`,backgroundSize: '30%', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }} className="p-5 md:p-8 lg:p-12 bg-[#F8F8F8] rounded-lg bg-no-repeat">
            <div className="flex items-center gap-3">
                <img src={review.image} className="h-16 w-16 rounded-full" alt="profile image" />
                <h3 className="text-xl font-medium text-[#285A43]">{review.name}</h3>
            </div>
            <p className="mt-8 font-medium text-[#121212] opacity-80">&quot; {review.review} &quot;</p>
        </motion.div>
    );
};

export default Review;