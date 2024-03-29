import Blogs from "../Blogs/Blogs";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../Newsletter/NewsLetter";
import OurOffer from "../OurOffer/OurOffer";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Hero from "../hero/Hero";
import PlantsCategory from "../plantsCategory/PlantsCategory";

const Home = () => {
    return (
        <div className="space-y-10 md:space-y-16 lg:space-y-32">
            <Hero />
            <PlantsCategory />
            <OurOffer />
            <Services />
            <Gallery />
            <Testimonials />
            <NewsLetter />
            <Blogs />
        </div>
    );
};

export default Home;