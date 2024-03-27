import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import {
  withAuthenticator,
  Button,
  Heading,
  Authenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Navbar from "../../components/Navbar/Navbar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    // <div className="flex justify-center items-center h-screen">
    //     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //         <h1 className="text-2xl font-bold mb-6">Login</h1>
    //         <form onSubmit={handleSubmit}>
    //             <div className="mb-4">
    //                 <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
    //                 <input
    //                     type="email"
    //                     id="email"
    //                     value={email}
    //                     onChange={handleEmailChange}
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                 />
    //             </div>
    //             <div className="mb-6">
    //                 <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
    //                 <input
    //                     type="password"
    //                     id="password"
    //                     value={password}
    //                     onChange={handlePasswordChange}
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                 />
    //             </div>
    //             <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
    //         </form>
    //     </div>
    // </div>
    <>
      <Navbar />
      <SubNavbar/>
      <div className="login--form mt-12">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      </div>
      
    </>
  );
};

export default Login;
