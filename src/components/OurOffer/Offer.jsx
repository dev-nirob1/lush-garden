const Offer = ({ data }) => {
    return (
        <div className="relative rounded-lg shadow-lg">
            <div>
                <img className='rounded-t-lg h-[250px] w-full' src={data.img} alt="" />
            </div>
            <button className="absolute top-4 right-4 rounded-full bg-white p-1">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25002 3.33338C3.71877 3.33338 1.66669 5.38546 1.66669 7.91671C1.66669 12.5 7.08335 16.6667 10 17.6359C12.9167 16.6667 18.3334 12.5 18.3334 7.91671C18.3334 5.38546 16.2813 3.33338 13.75 3.33338C12.2 3.33338 10.8292 4.10296 10 5.28088C9.57739 4.67888 9.01592 4.18758 8.36316 3.84858C7.7104 3.50958 6.98556 3.33286 6.25002 3.33338Z" stroke="#444444" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </button>
            <div className="flex items-center justify-between p-5">
                <div>
                    <h3 className="text-[#337A5B] text-lg font-medium mb-1">{data.plantName}</h3>
                    <span className="mr-4 text-[#121212] opacity-50"><del>({data.lastPrice})</del></span>
                    <span className="text-[#337A5B] font-medium">{data.currentPrice}</span>
                </div>
                <div>
                    <button className='px-4 py-2 border border-[#285A43] font-semibold hover:text-white rounded hover:bg-[#285A43] text-[#385A43] bg-white'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;