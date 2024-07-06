

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-bold">accredian</h3>
          <ul className="mt-4">
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p className="mt-2">Email: admissions@accredian.com</p>
          <p className="mt-2">Phone: +91 9079563929</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
