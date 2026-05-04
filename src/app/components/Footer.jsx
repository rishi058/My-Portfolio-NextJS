import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* 1st Column - Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#69fff8]">Contact Info</h3>
          <p className="text-[#ADB7BE]">Email: rishiqwerty01@gmail.com</p>
          <p className="text-[#ADB7BE]">Email: rishi.helloworld@gmail.com</p>
          <p className="text-[#ADB7BE]">Phone: +91 7255976477</p>
        </div>
        {/* 2nd Column - Home Address */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#69fff8]">Home Address</h3>
          <p className="text-[#ADB7BE]">Ram lakhan Path, Patna</p>
          <p className="text-[#ADB7BE]">Pincode - 800020</p>
          <p className="text-[#ADB7BE]">BIHAR</p>
        </div>
        {/* 3rd Column - Support & Data */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#69fff8]">Support</h3>
          <div className="flex flex-col gap-2">
            <a href="/global-groove" className="text-[#ADB7BE] hover:text-white transition-colors">
              Global Groove - Data Deletion
            </a>
            <p className="text-[#4b4b4b] text-xs mt-4">
              &copy; {new Date().getFullYear()} Rishi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
