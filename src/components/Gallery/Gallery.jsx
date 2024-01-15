import SectionTitle from "../shared/SectionTitle";
import image1 from "../../assets/Gallery/image1.png"
import image2 from "../../assets/Gallery/image2.png"
import image3 from "../../assets/Gallery/image3.png"
import image4 from "../../assets/Gallery/image4.png"
import image5 from "../../assets/Gallery/image5.png"
const Gallery = () => {
    return (
        <div>
            <SectionTitle title="Our Gallery View" />

            <div className="grid lg:grid-cols-3 gap-2">
                <div className="h-full w-full col-span-3 lg:col-span-1 overflow-hidden">
                    <img className="h-[400px] md:h-[500px] lg:h-full object-cover w-full" src={image1} alt="" />
                </div>
                <div className="lg:col-span-2 w-full h-full">
                    <div className="grid grid-cols-2 mx-auto gap-2 mx-auto w-full h-full">
                        <img className="h-full w-full object-cover" src={image2} alt="" />
                        <img className="h-full w-full object-cover" src={image3} alt="" />
                        <img className="h-full w-full object-cover" src={image4} alt="" />
                        <img className="h-full w-full object-cover" src={image5} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;