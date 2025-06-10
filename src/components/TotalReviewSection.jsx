import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

// Example data, you can replace this with props or API data
const reviewData = {
    totalReviews: 120,
    ratings: [
        { stars: 5, count: 84 }, // 70%
        { stars: 4, count: 18 }, // 15%
        { stars: 3, count: 10 }, // 8.3%
        { stars: 2, count: 5 },  // 4.2%
        { stars: 1, count: 3 },  // 2.5%
    ],
};

const getPercentage = (count, total) =>
    total > 0 ? ((count / total) * 100).toFixed(1) : 0;

const getAverageRating = (ratings, total) => {
    if (total === 0) return 0;
    const sum = ratings.reduce((acc, r) => acc + r.stars * r.count, 0);
    return (sum / total).toFixed(1);
};

const ProgressBar = ({ percent }) => (
    <div className="bg-gray-200 rounded h-2 w-full mx-2 overflow-hidden">
        <div
            className="bg-yellow-400 h-full rounded transition-all duration-300"
            style={{ width: `${percent}%` }}
        />
    </div>
);

const TotalReviewSection = ({ data = reviewData }) => {
    const average = getAverageRating(data.ratings, data.totalReviews);

    return (
        <div className="border  border-gray-200 rounded-lg p-6 bg-primaryColor mt-5">
            <h2 className="text-xl font-semibold text-white">Total Reviews</h2>
            <div className="text-4xl text-white font-bold flex items-center my-3"><span className="inline-block">{average}</span><TiStarFullOutline size={30} className=" ml-1 text-yellow-300"/><span className="text-white font-[500] text-sm ml-3">({data.totalReviews}+ reviews)</span> </div>
            <div className="text-white">
                {data.ratings.map(rating => {
                    const percent = getPercentage(rating.count, data.totalReviews);
                    return (
                        <div key={rating.stars} className="flex items-center mt-3">
                            <span className=" flex  items-center">
                                <span className="w-[10px]">{rating.stars}</span>
                                <span className="ml-1"><TiStarFullOutline size={24} className="inline-block text-yellow-300" /></span></span>
                            <ProgressBar percent={percent} />
                            <span className="w-12 text-right">{percent}%</span>
                        </div>
                    );darkslategray
                })}
            </div>
        </div>
    );
};

export default TotalReviewSection;
