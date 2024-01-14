import Gallery from "../Gallery/Gallery";
import NewsLetter from "../Newsletter/NewsLetter";
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
            <NewsLetter/>
        </div>
    );
};

export default Home;