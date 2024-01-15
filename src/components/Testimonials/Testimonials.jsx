import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../shared/SectionTitle';
import Review from './Review';
import {motion} from 'framer-motion'
const Testimonials = () => {
    const variants = {
        initial: {
            y: -100,
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
    const { data: testimonials = [] } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await fetch('/testimonials.json')
            const data = await res.json();
            return data
        }
    })
    return (
        <motion.div variants={variants} className='container mx-auto px-2 md:px-0'>
            <SectionTitle title="What do they say about us" />

            <div className='grid lg:grid-cols-3 gap-5 lg:gap-8'>
                {
                    testimonials.map(review => <Review key={review.id} review={review} />)
                }
            </div>
        </motion.div>
    );
};

export default Testimonials;