const NewsLetter = () => {
    return (
        <div className="h-[60vh] md:h-[70vh] max-w-[1530px] px-2 md:px-10 mx-auto flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-6" style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/src/assets/newsletter/banner.jpg'), lightgray 0px -251px / 100% 202.5% no-repeat", backgroundSize: '100% 100%' }}>

            <div className="md:col-span-1">
                <h2 className="text-2xl sm:w-3/4 mx-auto md:w-full text-center md:text-left md:text-4xl text-[#ebe7e7]">Enter your email address for our mailing Promo or other interesting things</h2>
            </div>
            <div className="flex items-center justify-center gap-5 md:col-span-1">
                <input className="bg-transparent text-white placeholder-gray-200 focus:outline-offset-0 backdrop-blur-[2px] w-full border border-white rounded-md" type="text" placeholder="Enter Your Email" />
                <button className="bg-[#285A43] hover:bg-[#224c38] text-white px-7 py-3 rounded-lg">Submit</button>
            </div>

        </div>


    );
};

export default NewsLetter;