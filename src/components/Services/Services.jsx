import { useQuery } from "@tanstack/react-query";
import Service from "./Service";
import servicesImg from "./../../assets/services.png"
const Services = () => {
    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('/services.json')
            const data = await res.json();
            return data
        }
    })
    return (
        <div className="max-w-[1530px] mx-auto ">
            <div className="grid md:grid-cols-2">

                <div>
                    <img src={servicesImg} alt="" />
                </div>

                <div className="grid md:grid-cols-2">
                    {
                        services.map((service, index) => <Service key={service.id} service={service} index={index} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;