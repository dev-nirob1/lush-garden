import { useQuery } from "@tanstack/react-query";
import Service from "./Service";
import servicesImg from "./../../assets/services.png"
import {motion} from 'framer-motion'
const Services = () => {
    const leftVariants = {
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
    const rightVariants = {
        initial: {
            x: 100,
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
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('/services.json')
            const data = await res.json();
            return data
        }
    })
    return (
        <div className="overflow-hidden max-w-[1530px] mx-auto px-2 md:px-0">
            <div className="grid md:grid-cols-2">

                    <motion.img variants={leftVariants} initial="initial" whileInView="animate" className="object-fill h-[550px] md:h-[650px] w-full" src={servicesImg} alt="" />

                <motion.div variants={rightVariants} initial="initial" whileInView="animate" className="grid md:grid-cols-2 gap-5 md:gap-0">
                    {
                        services.map((service, index) => <Service key={service.id} service={service} index={index} />)
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default Services;