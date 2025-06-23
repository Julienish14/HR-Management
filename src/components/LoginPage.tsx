import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="hr-container">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          HR Management
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="hr-card">
          <div className="flex justify-end space-x-4 mb-6">
            <a
              href="#"
              className="text-sm font-medium text-hr-blue hover:text-blue-700"
            >
              Login
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="#"
              className="text-sm font-medium text-hr-blue hover:text-blue-700"
            >
              Sign Up
            </a>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="hr-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="hr-input"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-hr-blue focus:ring-hr-blue border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-hr-blue hover:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" className="hr-button">
                Login
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-6">
              <button type="button" className="hr-google-button">
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.664-4.13-2.664-6.735-2.664-5.523 0-10 4.477-10 10s4.477 10 10 10c8.396 0 10-7.524 10-10 0-0.668-0.068-1.285-0.182-1.861h-9.818z" />
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Release Notes</p>
          <p>version: 20.2.23</p>
          <p className="mt-1">Copyright © 2023-24 Next and Services</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
