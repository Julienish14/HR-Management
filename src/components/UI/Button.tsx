import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "google";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClasses =
    "w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "border border-transparent text-white bg-hrm-blue hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500",
    google:
      "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
