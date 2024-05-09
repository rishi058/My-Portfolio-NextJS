import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white ml-20">
      <div className="container p-12 grid grid-cols-3 gap-4 text-center">
        {/* 1st Column - Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p>Email: rishiqwerty01@gmail.com</p>
          <p>Email: rishi.helloworld@gmail.com</p>
          <p>Phone: +91 7255976477</p>
        </div>
        {/* 2nd Column - Home Address */}
        <div>
          <h3 className="text-xl font-bold mb-4">Home Address</h3>
          <p>Ram lakhan Path, Patna</p>
          <p>Pincode - 800020</p>
          <p>BIHAR</p>
        </div>
        {/* 3rd Column - Education */}
        <div>
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <p>Degree: Bachelor of Technology in Computer Science</p>
          <p>University: IIIT Bhagalpur</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
