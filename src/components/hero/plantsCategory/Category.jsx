import image from '../../../assets/plant-category/Bamboo.jpg'
const Category = ({ singleCategory, index }) => {

    const { category, description } = singleCategory;

    return (
        <div className={`rounded-lg border p-8 ${index === 1 ? 'bg-[#337A5B] text-white' : 'bg-transparent'}`}>
            <img className='rounded' src={image} alt="" />
            <h4 className={`text-xl mt-3 mb-5 {${index === 1 ? 'text-white' : 'text-[#285A43]'} font-bold`}>{category}</h4>
            <p className='font-medium text-base'>{description}</p>
        </div>
    );
};

export default Category;