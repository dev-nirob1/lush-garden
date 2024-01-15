
const Review = ({ review }) => {
    return (
        <div style={{ background: `url(${review.backgroundImage}), lightgray`,backgroundSize: '30%', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }} className="p-3 md:p-5 lg:p-10 bg-[#F8F8F8] rounded-lg bg-no-repeat">
            <div className="flex items-center gap-3">
                <img src={review.image} className="h-16 w-16 rounded-full" alt="profile image" />
                <h3 className="text-xl font-medium text-[#285A43]">{review.name}</h3>
            </div>
            <p className="mt-8 font-medium text-[#121212] opacity-80">&quot; {review.review} &quot;</p>
        </div>
    );
};

export default Review;