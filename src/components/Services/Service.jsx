
const Service = ({service,index}) => {
    return (
        <div className={`p-4 lg:p-8 ${index === 1 || index=== 2 ? 'bg-gray-50': 'bg-transparent'} h-full`}>
            <img className="w-[100px] h-[100px] lg:w-[130px] h-[130px]" src={service.img} alt="" />
            <h3 className="py-3 text-xl font-semibold text-[#285A43]">{service.title}</h3>
            <p className="text-[#121212] opacity-80 font-medium">{service.description}</p>
        </div>
    );
};

export default Service;