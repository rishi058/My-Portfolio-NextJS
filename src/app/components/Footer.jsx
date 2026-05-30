import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer mt-auto w-full"
    >
      <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1st Column  */}
        <div>
          <p className="footer-text mb-1">Made with ❤️ by Rishi</p>
        </div>
        {/* 2nd Column  */}
        <div className="md:text-right">
           <p className="footer-text mb-1"> &copy; {new Date().getFullYear()} Rishi. All rights reserved.</p>
          </div> 
        </div>
    </footer>
  );
};

export default Footer;
