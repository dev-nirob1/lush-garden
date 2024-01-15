import { useQuery } from "@tanstack/react-query";
import Category from "./Category";
import {motion} from 'framer-motion'
const PlantsCategory = () => {
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
    const leftTextariants = {
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
    const rightTextariants = {
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

    const { data: categorys = [] } = useQuery({
        queryKey: ['plantCategory'],
        queryFn: async () => {
            const res = await fetch('/plantCategory.json')
            const data = await res.json();
            return data
        }
    })

    return (
        <motion.div variants={variants} className="overflow-hidden container mx-auto px-2 md:px-0">
            <motion.div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-6 md:mb-14 lg:mb-20 px-2">
                <motion.div variants={leftTextariants} initial="initial" whileInView="animate">
                    <h2 className="text-[#285A43] text-4xl">We Help choose the most suitable plants for you</h2>
                </motion.div>
                <motion.div variants={rightTextariants} initial="initial" whileInView="animate" className="text-lg text-[#121212] font-medium">
                    Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you&apos;re looking to brighten up your home or send a thoughtful gift.
                </motion.div>
            </motion.div>

            <motion.div variants={variants} initial="initial" whileInView="animate" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    categorys.map((category, index) => <Category key={category.id} index={index} singleCategory={category} />)
                }
            </motion.div>
        </motion.div>
    );
};

export default PlantsCategory;