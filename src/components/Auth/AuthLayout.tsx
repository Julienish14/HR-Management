import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  version: string;
  copyright: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  version,
  copyright,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Background design can be added here */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          HR Management
        </h2>
        <h3 className="text-center text-lg text-gray-600 mb-8">{title}</h3>
      </div>

      {children}

      <div className="mt-8 text-center text-sm text-hrm-dark">
        <p>Release Notes</p>
        <p>version: {version}</p>
        <p className="mt-2">Copyright © {copyright}</p>
      </div>
    </div>
  );
};

export default AuthLayout;
