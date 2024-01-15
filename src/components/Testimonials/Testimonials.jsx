import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../shared/SectionTitle';
import Review from './Review';

const Testimonials = () => {
    const { data: testimonials = [] } = useQuery({
        queryKey: ['testimonials'],
        queryFn: async () => {
            const res = await fetch('/testimonials.json')
            const data = await res.json();
            return data
        }
    })
    return (
        <div className='container mx-auto'>
            <SectionTitle title="What do they say about us" />

            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    testimonials.map(review => <Review key={review.id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Testimonials;