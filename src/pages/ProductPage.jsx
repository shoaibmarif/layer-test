import React from "react";
import { CurrentDeals } from "../components/CurrentDeals";
import { NavigationBar } from "../components/NavigationBar";
import ProductSlider from "../components/ProductSlider";
import { ContentWrapper } from "../layouts/ContentWrapper";
import { BreadCrump } from "../components/BreadCrump";
import { ProductInfo } from "../components/ProductInfo";
import {ProductDescriptionTabs} from "../components/ProductDescriptionTabs";
import ReviewSection from "../components/ReviewSection";
import ProductCard from "../components/ProductCard";
import Slider from "react-slick";
import product1 from "../assets/images/relatedProducts/product1.jpg";
import product2 from "../assets/images/relatedProducts/product2.jpg";
import product3 from "../assets/images/relatedProducts/product3.jpg";
import product4 from "../assets/images/relatedProducts/product4.jpg";
import product5 from "../assets/images/relatedProducts/product5.png";
import TotalReviewSection from "../components/TotalReviewSection";

export const ProductPage = () => {
    const sliderSettings = {
  dots: false,
  arrows:false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Adjust based on your design
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1278,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
     {
      breakpoint: 560,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};
    const relatedProducts = [
        {
            id: 1,
            name: "Kids Graphic Tee",
            image: product1,
            price: 19.99,
            previousPrice: 24.99,
            rating: 4.2,
            ratingCount: 58,
            inStock: true,
            sku: "KT101",
            description: "Fun and colorful graphic tee made from soft cotton, perfect for everyday play."
        },
        {
            id: 2,
            name: "Boys Cotton Shorts",
            image: product2,
            price: 15.99,
            previousPrice: 19.99,
            rating: 4.0,
            ratingCount: 34,
            inStock: true,
            sku: "BS202",
            description: "Lightweight and breathable cotton shorts, ideal for summer adventures."
        },
        {
            id: 3,
            name: "Girls Summer Dress",
            image: product3,
            price: 29.99,
            previousPrice: 34.99,
            rating: 4.7,
            ratingCount: 89,
            inStock: true,
            sku: "GD303",
            description: "Charming summer dress with floral prints, designed for comfort and style."
        },
        {
            id: 4,
            name: "Kids Hoodie",
            image: product4,
            price: 24.99,
            previousPrice: 29.99,
            rating: 4.5,
            ratingCount: 76,
            inStock: true,
            sku: "KH404",
            description: "Cozy hoodie with a soft lining, great for layering on chilly days."
        },
        {
            id: 5,
            name: "Printed Joggers",
            image: product5,
            price: 22.99,
            previousPrice: 27.99,
            rating: 4.3,
            ratingCount: 41,
            inStock: true,
            sku: "PJ505",
            description: "Trendy joggers with fun prints, offering comfort and flexibility for active kids."
        },
        {
            id: 6,
            name: "Kids Cap",
            image: product1,
            price: 9.99,
            previousPrice: 12.99,
            rating: 4.1,
            ratingCount: 22,
            inStock: true,
            sku: "KC606",
            description: "Cozy hoodie with a soft lining, great for layering on chilly days."

        },
        {
            id: 7,
            name: "Unisex Sneakers",
            image: product2,
            price: 34.99,
            previousPrice: 39.99,
            rating: 4.6,
            ratingCount: 65,
            inStock: true,
            sku: "US707",
            description: "Lightweight and breathable cotton shorts, ideal for summer adventures."

        }
    ];
    const breadcrumbs = [
        { label: "Home", href: "#" },
        { label: "Product Categories", href: "#" },
        { label: "Printed Shirt" }
    ];

    const [selectedColor, setSelectedColor] = React.useState("red");
    const [selectedSize, setSelectedSize] = React.useState("4-6 Years");
    const [quantity, setQuantity] = React.useState(1);
    const inStock = true;

    const colors = [    
        { name: "Red", value: "red", class: "bg-red-300", ring: "ring-red-400" },
        { name: "Blue", value: "blue", class: "bg-blue-300", ring: "ring-blue-400" },
        { name: "Green", value: "green", class: "bg-green-300", ring: "ring-green-400" },
        { name: "orange", value: "orange", class: "bg-orange-300", ring: "ring-orange-400" },
        { name: "gray", value: "gray", class: "bg-gray-300", ring: "ring-gray-400" }
    ];
    const sizes = [
        "4-6 Years",
        "6-8 Years",
        "8-10 Years",
        "10-12 Years",
        "12-14 Years",
        "14-16 Years",
        "16-18 Years"
    ];

    return (
        <React.Fragment>
            <CurrentDeals/>
            <NavigationBar/>
            <ContentWrapper>
                <BreadCrump  list={breadcrumbs} />
                <main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12 gap-y-8 ">
                    <section className="md:col-span-7 flex flex-col gap-6">                        
                        <ProductSlider />
                    </section>
                    <ProductInfo 
                        selectedColor={selectedColor} 
                        setSelectedColor={setSelectedColor} 
                        selectedSize={selectedSize} 
                        setSelectedSize={setSelectedSize} 
                        quantity={quantity} 
                        setQuantity={setQuantity} 
                        inStock={inStock} 
                        colors={colors} 
                        sizes={sizes} 
                        productName="Ultra Stretch DRY-EX T-Shirt | Printed"
                        sku="U129c"
                        rating={4.5}
                        ratingCount={120}
                        price={29.99}
                        previousPrice={39.99}
                        description="Classic cotton t-shirt with a comfortable fit, available in multiple colors and sizes. Perfect for everyday wear, easy to style, and made from soft, breathable fabric.Discover the comfort and style of our Ultra Stretch DRY-EX T-Shirt. Choose your favorite color and size, and enjoy fast shipping on all orders!"
                        onAddToCart={() => console.log("Add to cart clicked")}
                    />
                </main>
                 <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12 gap-y-8 ">
                       <section className="md:col-span-7 flex flex-col gap-6 ">
                            <ProductDescriptionTabs />
                        </section>
                           <section className="xs:col-span-1 lg:col-span-5">
                            
                                <TotalReviewSection />
                                <ReviewSection />
                            
                            </section>
                </div>
                <h2 className="font-bold text-3xl my-8 text-primaryColor">Related Products</h2>
                <Slider {...sliderSettings}>
                    {relatedProducts.map(({
                        id,
                        name,
                        image,
                        price,
                        previousPrice,
                        rating,
                        ratingCount,
                        inStock,
                        sku,
                        description
                    }) => (
                        <div key={id} className="px-2">
                            <ProductCard
                                id={id}
                                name={name}
                                image={image}
                                price={price}
                                previousPrice={previousPrice}
                                rating={rating}
                                ratingCount={ratingCount}
                                inStock={inStock}
                                sku={sku}
                                description={description}
                                onAddToCart={() => console.log(`Add to cart clicked for product ${id}`)}
                            />
                        </div>
                    ))}
                </Slider>
            </ContentWrapper>
        </React.Fragment>
    );
}
