import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react'; // Import useEffect to initialize AOS

const Header = () => {
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <header className="bg-white flex flex-col">
      <div
        className="w-full flex justify-center items-center text-black px-4 md:px-8 py-3 bg-blue-100 text-sm"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <span className="mr-2 md:mr-4">
          Navigate your ideal career path with tailored expert advice
        </span>
        <a
          href="#contact-expert"
          className="text-blue-600 font-medium hover:underline"
        >
          Contact Expert
        </a>
      </div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 bg-white shadow-md">
        <div className="flex items-center space-x-2 md:space-x-6">
          <div
            className="text-xl md:text-2xl font-bold text-blue-600"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            accredian
            <br />
            <span className="text-xs md:text-sm pl-1 md:pl-2 text-gray-700 block mt-[-8px]">
              credentials that matter
            </span>
          </div>

          <button
            className="border bg-blue-600 text-white border-gray-300 rounded px-3 md:px-4 py-1 md:py-2 hover:bg-blue-700 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Courses ▼
          </button>
        </div>

        <nav
          className="flex flex-col md:flex-row text-black items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <a
            href="#refer"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            Refer & Earn
          </a>
          <a
            href="#benefits"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            Benefits
          </a>
          <a
            href="#faq"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            FAQs
          </a>
          <a
            href="#support"
            className="hover:text-blue-600 font-medium transition duration-300"
          >
            Support
          </a>
          <button className="text-black bg-gray-100 px-3 md:px-4 py-1 md:py-2 rounded hover:bg-gray-200 transition duration-300">
            Login
          </button>
          <button className="ml-2 border border-blue-600 bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded hover:bg-blue-700 transition duration-300">
            Try for free
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
