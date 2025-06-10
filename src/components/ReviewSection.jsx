import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Star } from "./Star";
const reviewsData = [
    {
        id: 1,
        user: {
            name: "Alice Johnson",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        rating: 5,
        comment: "Absolutely love this product! The quality exceeded my expectations and the delivery was super fast.",
    },
    {
        id: 2,
        user: {
            name: "Michael Smith",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        rating: 4,
        comment: "Great value for money. The product matches the description and works perfectly.",
    },
    {
        id: 3,
        user: {
            name: "Sara Lee",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        rating: 5,
        comment: "Fantastic! Highly recommend to anyone looking for quality and reliability.",
    },
    {
        id: 4,
        user: {
            name: "David Kim",
            avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        },
        rating: 3,
        comment: "Product is good but shipping took longer than expected.",
    },
    {
        id: 5,
        user: {
            name: "Emily Clark",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        rating: 4,
        comment: "Nice product, well packaged. Would buy again.",
    },
];

const ReviewSection = () => {
    const [reviews] = useState(reviewsData);

    const sliderSettings = {
        dots: true,
        infinite: reviews.length > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
    };

    return (
        <div className="p-5  shadow-[#ECFAE5] border-primaryColor rounded-lg shadow-sm border-2 mt-5">
                        {reviews.length > 0 ? (
                <Slider {...sliderSettings}>
                    {reviews.map((review) => (
                        <div key={review.id}>
                            <div className="min-h-[350px]  border-0 flex items-center justify-center text-center flex-col xs:p-4 lg:p-10 rounded-xl shadow-sm bg-[#ECFAE5]">
                                <img
                                    className="rounded-full w-20 h-20 object-cover"
                                    src={review.user.avatar}
                                    alt={review.user.name}
                                    style={{
                                        objectFit: "cover",
                                        border: "2px solid #eee",
                                    }}
                                />
                                <div style={{ fontWeight: "bold", fontSize: 18, marginBottom: 4 }}>
                                    {review.user.name}
                                </div>
                                <div className="flex items-center gap-x-1 flex-row">
                                    <Star rating={review.rating} />
                                </div>
                                <div style={{ margin: "16px 0", fontSize: 16, color: "#444", textAlign: "center" }}>
                                    "{review.comment}"
                                </div>
                              
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div style={{ textAlign: "center", color: "#aaa", padding: 40 }}>
                    No reviews available.
                </div>
            )}
        </div>
    );
};

export default ReviewSection;