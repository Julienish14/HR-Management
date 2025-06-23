import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ username, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            HR Management
          </h1>
        </div>
      </header>

      {/* Login/Sign Up Tabs */}
      <div className="flex justify-center space-x-8 mb-10">
        <button className="text-blue-600 font-medium text-lg border-b-2 border-blue-600 pb-1 px-1">
          Login
        </button>
        <button className="text-gray-500 font-medium text-lg pb-1 px-1 hover:text-gray-700">
          Sign Up
        </button>
      </div>

      {/* Login Form */}
      <div className="max-w-md mx-auto w-full px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember
              </label>
            </div>

            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-sm text-gray-500">Or</span>
            </div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.798-1.677-4.188-2.698-6.735-2.698-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.961h-9.811z" />
            </svg>
            <span>Login with Google</span>
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-sm text-gray-500">
        <div className="mb-1">Release Notes</div>
        <div className="mb-1">version: 20.2.23</div>
        <div>Copyright © 2023-24 Next and Services</div>
      </footer>
    </div>
  );
};

export default LoginPage;
