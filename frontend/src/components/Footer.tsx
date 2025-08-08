import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 p-4 border-t">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <span>&copy; {new Date().getFullYear()} AI-Powered Animated Math Video Generator. All rights reserved.</span>
        <p>
          <a
            href="https://github.com/ElaineCHL/Animation-Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a
            href="/about"
            className="text-blue-600 hover:underline"
          >
            About
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
