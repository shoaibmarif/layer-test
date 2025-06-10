import React ,{useState} from "react";
import { CiHeart } from "react-icons/ci";
import { PiShareFat } from "react-icons/pi";
import { Star } from "./Star";
import { CiShoppingCart } from "react-icons/ci";
import { useEffect } from "react";
import { PiShareFatFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";



export const ProductInfo = ({
  productName,
  sku,
  rating,
  ratingCount,
  price,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  inStock,
  colors,
  sizes,
  onAddToCart,
  previousPrice,
  description,
}) => {
const [isHeartHovered, setIsHeartHovered] = useState(false);
const [isShareHovered, setIsShareHovered] = useState(false);
    useEffect(() => {
    if (!selectedSize && sizes && sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }
  }, [selectedSize, sizes, setSelectedSize]);
  return (
    
    <section className="md:col-span-5 flex flex-col gap-6">
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-primaryColor">Menwears</span>
      <div className="flex items-center gap-4 text-primaryColor">
  <div
    onMouseEnter={() => setIsHeartHovered(true)}
    onMouseLeave={() => setIsHeartHovered(false)}
    className="cursor-pointer"
  >
    {isHeartHovered ? <FaHeart size={24} /> : <CiHeart size={24} />}
  </div>
  <div
    onMouseEnter={() => setIsShareHovered(true)}
    onMouseLeave={() => setIsShareHovered(false)}
    className="cursor-pointer"
  >
    {isShareHovered ? <PiShareFatFill size={22} /> : <PiShareFat size={22} />}
  </div>
</div>


        </div>
        <h2 className="font-bold text-2xl mt-2 text-black">{productName}</h2>

        <div className="flex items-center gap-x-5  mt-2">
          <span className="text-primaryColor text-base">
            <strong>SKU:</strong> {sku}{" "}
          </span>
          <span className="xs:hidden lg:block">|</span>
          <Star rating={4} />
          <span className="text-xs text-gray-500 mt-1">(145+ Reviews)</span>
        </div>
        <div className="flex items-baseline  gap-2">
          <span className="text-gray-500 text-sm mt-3 block">
            <span className="text-4xl font-bold text-primaryColor">
              ${price && price.toString().split(".")[0]
                ? `${price.toString().split(".")[0]}`
                : null}
            </span>
            <span className="text-2xl font-bold text-primaryColor ">
              {price && price.toString().split(".")[1]
                ? `.${price.toString().split(".")[1]}`
                : null}
            </span>
          </span>
          <span className="line-through text-lg text-gray-500">
            ${previousPrice}
          </span>
        </div>

        <p className="text-gray-500 text-sm mt-3">{description}</p>
        {/* Color Picker */}
        <div className="mt-7">
            <div className="font-semibold  text-gray-600">Color:</div>
          <div className="flex items-center flex-wrap gap-x-5 mt-5">
            {colors.map((color) => (
              <button
                key={color.value}
                className={`w-9 h-9 rounded-full  shadow-sm transition-all duration-300 ${
                  color.class
                } ${color.ring} ${
                  selectedColor === color.value
                    ? `ring-2 ring-offset-2 ${color.ring}  scale-110`
                    : "hover:scale-105"
                }`}
                aria-label={color.name}
                aria-pressed={selectedColor === color.value}
                onClick={() => setSelectedColor(color.value)}
              />
            ))}
          </div>
        </div>
        {/* Size Selector */}
                    <div className="font-semibold  text-gray-600 mt-5">Sizes:</div>

        {sizes && sizes.length > 0 && !selectedSize && setSelectedSize(sizes[0])}
        <div className="mt-5">
          <div className="flex items-center flex-wrap xs:gap-2 md:gap-4">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 text-gray-700 rounded-sm  transition-all font-[500] xs:text-[13px] md:text-sm duration-300   ${
                  selectedSize === size
                    ? " bg-primaryColor text-white shadow"
                    : "bg-[#ECFAE5]"
                }`}
                aria-pressed={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >

                {size}
              </button>
            ))}
          </div>
        </div>
        {/* Amount and Counter */}
        <div className="mt-12 flex items-center gap-6">
          <div
            className="flex items-center justify-between w-[250px]  border border-primaryColor rounded-full h-[50px]  py-2 px-4"
          >
            <button
              className="text-xl px-2 text-primaryColor "
              aria-label="Decrease"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="px-4 text-base text-primaryColor">{quantity}</span>
            <button
              className="text-xl px-2 text-primaryColor"
              aria-label="Increase"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
          <button
            className={` bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 flex items-center opacity-90 hover:opacity-100 justify-center gap-x-2 w-full rounded-full py-3 h-[50px]  text-sm transition bg-primaryColor text-white`}
            onClick={onAddToCart}
          >
             <CiShoppingCart size={26}/> Add to Cart
          </button>
        </div>
        {/* Add to Cart Button */}
      </div>
    </section>
  );
};
