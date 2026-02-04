import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";

type Props = {};

type LoginFormsInputs = {
  // userName: string;
  email: string;
  password: string;
};

const validation = Yup.object().shape({
  // userName: Yup.string().required("Username is required"),
  email: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();

  const auth = useAuth();
  console.log("Auth object:", auth);

  const loginUserd =
    auth.loginUser ||
    (() => {
      console.error("loginUser is not available");
      return Promise.reject("loginUser is not available");
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.email, form.password);
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl dark:bg-gray-800 dark:border dark:border-gray-700 overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
              Sign in to your account
            </h1>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-8">
              Enter your credentials to access your account
            </p>

            <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-lightGreen focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                  {...register("email")}
                />

                {errors.email ? (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                ) : (
                  ""
                )}
                {/* {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )} */}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-lightGreen focus:border-transparent outline-none transition-all"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-red hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white font-medium rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 focus:outline-none transition-colors shadow-md hover:shadow-lg"
                aria-label="Sign in to account"
              >
                Sign in
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social login options - optional but good UX */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>

              <p className="text-sm text-center text-gray-600 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-lightGreen hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="underline hover:text-gray-700 dark:hover:text-gray-300"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline hover:text-gray-700 dark:hover:text-gray-300"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
