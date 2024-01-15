import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../shared/SectionTitle";
import Offer from "./Offer";
import {motion} from 'framer-motion'
const OurOffer = () => {
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
    const { data: offerData = [] } = useQuery({
        queryKey: ['plantsOffer'],
        queryFn: async () => {
            const res = await fetch('plantsOffer.json')
            const data = await res.json()
            return data;
        }
    })

    return (
        <motion.div variants={variants} initial="initial" whileInView="animate" className="container mx-auto px-2 md:px-0">
            <SectionTitle title="What we offer to you" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 static">
                {
                    offerData.map(data => <Offer key={data.id} data={data} />)
                }
            </div>
        </motion.div>
    );
};

export default OurOffer;