import React, { Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import Navbar from "./components/Navbar/Navbar";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import ProtectedRoutes from "./routes/ProtectedRoute";
import Spinner from "./components/Spinner/Spinner";

const Home = lazy(() => import("./screen/Home/Home"));
const Forum = lazy(() => import("./screen/Forum/Forum"));
const ThreadPage = lazy(() => import("./screen/ThreadPage/ThreadPage"));
const Login = lazy(() => import("./screen/Login/Login"));
const ThreadForm = lazy(() => import("./screen/ThreadForm/ThreadForm"));
const ErrorPage = lazy(() => import("./screen/Error/Error"));

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator.Provider>
      <Router>
        <Navbar />
        <SubNavbar />
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forum/*" element={<Forum />} />
            <Route path="/thread/:slug/:threadId" element={<ThreadPage />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/thread-form" element={<ThreadForm />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </Authenticator.Provider>
  );
}

export default App;
