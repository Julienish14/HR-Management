import React from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";
import { Link } from "react-router-dom";


const Login: React.FC = () => {
  return (
    <AuthLayout
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">HR Management</h1>
          <div className="mt-4 flex justify-center space-x-4">
            <Link to="/login" className="font-medium text-gray-500">
              Login
            </Link>
            <Link to="/signup" className="font-medium text-primary underline">
              Sign Up
            </Link>
          </div>
        </div>
      title="Login | Sign Up"
      version="20.2.23"
      copyright="2023-24 Next and Services"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;

// import { Link } from "react-router-dom";

// const SignUpPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//       <div className="w-full max-w-md space-y-8">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900">HR Management</h1>
//           <div className="mt-4 flex justify-center space-x-4">
//             <Link to="/login" className="font-medium text-gray-500">
//               Login
//             </Link>
//             <Link to="/signup" className="font-medium text-primary underline">
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="first-name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 First Name
//               </label>
//               <input
//                 id="first-name"
//                 name="first-name"
//                 type="text"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="last-name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Last Name
//               </label>
//               <input
//                 id="last-name"
//                 name="last-name"
//                 type="text"
//                 required
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="confirm-password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Re-enter Password
//             </label>
//             <input
//               id="confirm-password"
//               name="confirm-password"
//               type="password"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
//             />
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>

//         {/* <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative flex justify-center text-sm">
//             <span className="px-2 bg-white text-gray-500">
//               Or continue with
//             </span>
//           </div>
//         </div> */}

//         <div className="mt-2">
//           <button
//             type="button"
//             className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//           >
//             <span>Sign Up with Google</span>
//           </button>
//         </div>

//         <div className="mt-8 text-center text-sm text-gray-500">
//           <p>Rebecca Notes</p>
//           <p>version: 20.2.0.1</p>
//           <p className="mt-2">Copyright © 2023-24 HRM and services</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
