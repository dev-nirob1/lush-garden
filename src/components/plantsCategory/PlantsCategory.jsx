import { useQuery } from "@tanstack/react-query";
import Category from "./Category";

const PlantsCategory = () => {
    const { data: categorys = [] } = useQuery({
        queryKey: 'plantCategory',
        queryFn: async () => {
            const res = await fetch('/plantCategory.json')
            const data = await res.json();
            return data
        }
    })

    return (
        <div className="container mx-auto px-2 md:px-0">
            <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div >
                    <h2 className="text-[#285A43] text-4xl">We Help choose the most suitable plants for you</h2>
                </div>
                <div className="text-lg text-[#121212] font-medium">
                    Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you&apos;re looking to brighten up your home or send a thoughtful gift.
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    categorys.map((category, index) => <Category key={category.id} index={index} singleCategory={category} />)
                }
            </div>
        </div>
    );
};

export default PlantsCategory;