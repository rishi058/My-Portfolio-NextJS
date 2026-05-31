import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto w-full">
      <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-3">
        {/* Stack on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <p className="footer-text text-center sm:text-left">
            Made with ❤️ by Rishi
          </p>
          <p className="footer-text text-center sm:text-right">
            &copy; {new Date().getFullYear()} Rishi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
