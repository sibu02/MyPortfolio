import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left: Copyright */}
          <div>
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sibu Sundar Das. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
