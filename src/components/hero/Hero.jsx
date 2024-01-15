import lushBanner from './../../assets/banner.jpg';
import {motion} from 'framer-motion'
const Hero = () => {
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
        <motion.div variants={variants}className="h-[100vh] w-full object-cover" style={{ background: `linear-gradient(180deg, rgba(18, 56, 39, 0.34) 0%, rgba(40, 90, 67, 0.34) 47.92%, rgba(40, 90, 67, 0.10) 100%), url(${lushBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
            <motion.div variants={variants} initial="initial" whileInView="animate"  className="h-full w-full flex items-center justify-center">
                <div className="md:w-3/4 text-center">
                    <h1 className="text-3xl font-medium px-2 md:px-0 lg:text-5xl mb-4 text-white">Nature&apos;s Beauty Delivered to You</h1>
                    <p className="text-lg font-medium text-[#F8F8F8] md:w-3/4 lg:w-7/12 mx-auto px-2 md:px-0">Nature&apos;s beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!</p>
                    <div className='mt-10'>
                        <button className='px-8 py-3 mr-4 font-semibold text-white rounded bg-[#285A43] hover:text-[#385A43] hover:bg-white'>
                            Book Now
                        </button>
                        <button className='px-8 py-[10px] font-semibold bg-transparent rounded hover:bg-[#285A43] text-white border border-white hover:border-[#285A43]'>
                            Watch Video
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>

    );
};

export default Hero;