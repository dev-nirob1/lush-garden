import OurOffer from "../OurOffer/OurOffer";
import Hero from "../hero/Hero";
import PlantsCategory from "../plantsCategory/PlantsCategory";

const Home = () => {
    return (
        <div className="space-y-32">
            <Hero />
            <PlantsCategory/>
            <OurOffer/>
        </div>
    );
};

export default Home;