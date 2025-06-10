import React, { useState } from "react";

export function ProductDescriptionTabs() {
  // Open the first tab by default
  const [openTab, setOpenTab] = useState(0);

  const handleTabClick = (index) => {
    setOpenTab(openTab === index ? null : index);
  };

  const tabs = [
    {
      label: "Product Description",
      content: (
        <div className="text-sm text-gray-600">
          <p className="">
            <span className=" text-primaryColor">Premium Product</span>,
            crafted with attention to detail and designed for both style and
            comfort. Featuring a modern silhouette and versatile color palette,
            this item seamlessly fits into any wardrobe. Whether you're dressing
            up for a special occasion or keeping it casual, this product
            delivers unmatched quality and elegance.
          </p>
          <ul className="list-disc pl-6 mt-6 flex flex-col gap-y-2">
            <li>Modern, timeless design</li>
            <li>Available in multiple sizes and colors</li>
            <li>Perfect for daily wear or special events</li>
            <li>Eco-friendly packaging</li>
            <li>Free shipping on first order</li>
          </ul>
          <p className="mt-5">
            Experience the difference with our commitment to excellence and
            customer satisfaction.
          </p>
        </div>
      ),
    },
    {
      label: "Terms and Conditions",
      content: (
        <div className="text-sm text-gray-600">
          <ol className="list-decimal pl-6 flex flex-col gap-y-3">
            <li>
              <strong>Returns & Exchanges:</strong> Products can be returned or
              exchanged within 30 days of delivery, provided they are unused and
              in original packaging.
            </li>
            <li>
              <strong>Warranty:</strong> All products come with a 1-year limited
              warranty covering manufacturing defects.
            </li>
            <li>
              <strong>Shipping:</strong> Orders are processed within 2 business
              days. Delivery times may vary based on location.
            </li>
            <li>
              <strong>Privacy Policy:</strong> Your personal information is kept
              confidential and will not be shared with third parties.
            </li>
            <li>
              <strong>Customer Support:</strong> For any queries, contact our
              support team at{" "}
              <a
                href="mailto:support@example.com"
                className="text-primaryColor underline"
              >
                support@example.com
              </a>
              .
            </li>
          </ol>
          <div className="mt-7 p-3 bg-[#ECFAE5] rounded text-primaryColor">
            <strong>Note:</strong> Please read our full policy on our website
            for more details.
          </div>
        </div>
      ),
    },
    {
      label: "Material",
      content: (
        <div className="text-sm text-gray-600">
          <ul className="list-disc  pl-6 flex flex-col gap-y-3">
            <li>
              <strong>Fabric:</strong> 100% Certified Organic Cotton, grown
              without harmful chemicals for a softer, safer feel.
            </li>
            <li>
              <strong>Dyes:</strong> Eco-friendly, non-toxic dyes ensure vibrant
              colors that last wash after wash.
            </li>
            <li>
              <strong>Texture:</strong> Breathable and lightweight, ideal for
              all seasons.
            </li>
            <li>
              <strong>Sustainability:</strong> Ethically sourced materials and
              environmentally responsible manufacturing processes.
            </li>
          </ul>
          <p className="mt-4 text-gray-700">
            <strong>Care Instructions:</strong> Machine wash cold with like
            colors. Do not bleach. Tumble dry low or hang to dry. Iron on low if
            needed.
          </p>
          <div className="flex items-center gap-2 text-primaryColor mt-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Certified by Global Organic Textile Standard (GOTS)</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-5">
      {tabs.map((tab, idx) => (
        <div key={tab.label} className="border-b last:border-b-0 p-2 rounded-md">
          <button
            onClick={() => handleTabClick(idx)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-[#ECFAE5] transition-colors duration-200 focus:outline-none"
            aria-expanded={openTab === idx}
          >
            <span className="text-base font-semibold text-primaryColor">
              {tab.label}
            </span>
            <span
              className={`transform transition-transform duration-300 ease-in-out text-primaryColor`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                {openTab === idx ? (
                  // Minus icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                ) : (
                  // Plus icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14M19 12H5"
                  />
                )}
              </svg>
            </span>
          </button>
          <div
            className={`tab-panel overflow-hidden transition-all duration-500 ease-in-out  px-6 ${
              openTab === idx ? "open" : ""
            }`}
            style={{ willChange: "max-height, opacity, padding" }}
          >
            <div className="animate-fade-in">{tab.content}</div>
          </div>
        </div>
      ))}
      {/* Custom animation for fade-in and smooth height */}
      <style>
        {`
                .tab-panel {
                    max-height: 0;
                    opacity: 0;
                    padding-top: 0;
                    padding-bottom: 0;
                    pointer-events: none;
                }
                .tab-panel.open {
                    max-height: 500px;
                    opacity: 1;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    pointer-events: auto;
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                `}
      </style>
    </div>
  );
}
