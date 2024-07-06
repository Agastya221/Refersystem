import { useState } from "react";
import referimg from "../assets/referimg.png";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Refer");

  return (
    <section className="bg-gray-100 flex justify-center py-12">
      <div className="w-4/6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center py-4">
            <div
              className="space-x-8 text-black rounded-full p-3 px-20 bg-customcolor font-roboto text-lg"
              data-aos="fade-up"
            >
              {["Refer", "Benefits", "FAQs", "Support"].map((tab) => (
                <div key={tab} className="relative inline-block">
                  <a
                    href="#"
                    className={`hover:text-blue-600 ${activeTab === tab ? "text-blue-600" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </a>
                  {activeTab === tab && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-2 rounded-full bg-blue-600 mt-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex items-center justify-between mt-16 px-8 bg-white shadow-lg rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200" // Optional delay for animation
          >
            <div className="text-left w-1/2">
              <h1 className="text-black text-5xl font-bold leading-tight">
                Let’s Learn <br />
                <span>& Earn</span>
              </h1>
              <p className="text-black mt-4 text-2xl leading-relaxed">
                Get a chance to win <br /> up-to{" "}
                <span className="text-blue-600 text-3xl font-bold">Rs. 15,000</span>
              </p>
              <button className="mt-6 bg-blue-600 text-white px-8 py-2 rounded">
                Refer Now
              </button>
            </div>
            <img className="ml-8 w-3/5" src={referimg} alt="Refer and Earn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
