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
            <div className="grid lg:grid-cols-3 gap-2 h-full w-full">
    <div className="h-full col-span-3 lg:col-span-1 w-full">
        <img className="h-full w-full object-cover" src={image1} alt="" />
    </div>
    <div className="lg:col-span-2 h-full w-full mx-auto">
        <div className="grid grid-cols-2 w-full h-full gap-2">
            <img className="h-full w-fit object-cover" src={image2} alt="" />
            <img className="h-full w-fit object-cover" src={image3} alt="" />
            <img className="h-full w-fit object-cover" src={image4} alt="" />
            <img className="h-full w-fit object-cover" src={image5} alt="" />
        </div>
    </div>
</div>

        </div>
    );
};

export default Gallery;