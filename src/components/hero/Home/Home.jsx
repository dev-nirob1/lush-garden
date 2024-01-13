import Hero from "../Hero";
import PlantsCategory from "../plantsCategory/PlantsCategory";

const Home = () => {
    return (
        <div className="space-y-32">
            <Hero />
            <PlantsCategory/>
        </div>
    );
};

export default Home;