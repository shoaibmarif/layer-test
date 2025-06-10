import React, { useEffect, useState } from "react";
import {Star} from "./Star"; // Assuming you have a Star component for rendering stars
const ProductCard = ({
    id,
    name,
    image,
    price,
    previousPrice,
    rating,
    ratingCount,
    inStock,
    sku,
    description,
    onAddToCart,
}) => {
    const [count, setCount] = useState(1);

    const handleDecrease = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleIncrease = () => {
        setCount((prev) => prev + 1);
    };

    const handleAddToCart = () => {
        onAddToCart({ id, name, count });
    };

    return (
        <div className=" rounded-2xl shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col">
            <img src={image} alt={name} className="w-full h-48 object-cover mb-3 rounded-lg" />
            <h2 className="text-lg font-bold">{name}</h2>
            <span className="text-xs text-gray-400 mb-1">SKU: {sku}</span>
            <div className="flex items-center gap-2 mb-2">
            <Star rating={rating} />
                <span className="text-xs text-gray-500 ml-1 mt-1">{rating} ({ratingCount})</span>
            </div>
            <p className="text-sm text-gray-600  my-4">{description}</p>
            <div className="flex items-end gap-2 mb-2">
                <span className="text-2xl font-bold text-primaryColor">${price?.toFixed(2)}</span>
                <span className="text-gray-400 line-through text-base">${previousPrice?.toFixed(2)}</span>
            </div>
            {/* <div className="flex items-center gap-3 mb-3">
                <button
                    onClick={handleDecrease}
                    className="px-2 py-1 bg-gray-200 rounded text-lg font-bold"
                    disabled={count === 1}
                >-</button>
                <span className="text-lg font-semibold">{count}</span>
                <button
                    onClick={handleIncrease}
                    className="px-2 py-1 bg-gray-200 rounded text-lg font-bold"
                >+</button>
            </div> */}
            <button
                onClick={handleAddToCart}
                disabled={!inStock}
                className={`w-full py-2 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                    inStock
                        ? "text-sm py-4 mt-3 bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
                {inStock ? "Add to Cart" : "Out of Stock"}
            </button>
        </div>
    );
};

export default ProductCard;
