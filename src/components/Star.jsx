import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

export const Star = ({ rating }) => {
    const totalStars = 5;
    return (
        <span className='flex items-center'>
            {[...Array(totalStars)].map((_, i) => (
                <span
                    key={i}
                    className={`text-yellow-500 text-2xl ${i < rating ? 'filled' : 'unfilled'}`}
                    aria-label={i < rating ? 'Filled star' : 'Unfilled star'}
                >
                    {i < rating ? <TiStarFullOutline /> : <TiStarOutline />}
                </span>
            ))}
        </span>
    );
};
