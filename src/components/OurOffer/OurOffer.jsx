import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../shared/SectionTitle";
import Offer from "./Offer";

const OurOffer = () => {

    const { data: offerData = [] } = useQuery({
        queryKey: 'plantsOffer',
        queryFn: async () => {
            const res = await fetch('plantsOffer.json')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className="container mx-auto px-2 md:px-0">
            <SectionTitle title="What we offer to you" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 static">
                {
                    offerData.map(data => <Offer key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default OurOffer;