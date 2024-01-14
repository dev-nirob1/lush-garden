import Gallery from "../Gallery/Gallery";
import OurOffer from "../OurOffer/OurOffer";
import Services from "../Services/Services";
import Hero from "../hero/Hero";
import PlantsCategory from "../plantsCategory/PlantsCategory";

const Home = () => {
    return (
        <div className="space-y-32">
            <Hero />
            <PlantsCategory/>
            <OurOffer/>
            <Services/>
            <Gallery/>
        </div>
    );
};

export default Home;