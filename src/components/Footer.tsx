import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-md mx-auto text-center">
        <p className="text-sm text-gray-600 mb-2">Release Notes</p>
        <p className="text-xs text-gray-500">version: 20.2.23</p>
        <p className="text-xs text-gray-500 mt-2">
          Copyright © 2023-24 Next and Services
        </p>
      </div>
    </footer>
  );
};

export default Footer;
