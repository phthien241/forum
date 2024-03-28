import React, { useState } from "react";
import Amplify from "aws-amplify";

import {
  withAuthenticator,
  Button,
  Heading,
  Authenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import Navbar from "../../components/Navbar/Navbar";
import SubNavbar from "../../components/SubNavbar/SubNavbar";
import { useNavigate } from "react-router-dom";
import useUserCreateUser from "../../hooks/userCreateUser";

const Login: React.FC = () => {
  const navigate = useNavigate();
  let currentState = "haha";
  const { route } = useAuthenticator((context) => [context.route]);
  currentState = route === "signIn" || route === "signUp" ? route : currentState;

  const { handleCreateUser, isLoading, isError, success } = useUserCreateUser();
  return (
    <>
      <div className="login--form mt-12">
        <Authenticator>
          {({ signOut, user }) => {
            console.log(currentState, user)
            if (currentState === "signUp" && user) {
              const username = user.username;
              const createdAt = new Date();
              const avatar =
                "https://as2.ftcdn.net/v2/jpg/02/09/70/41/1000_F_209704181_M6KX2j1O8uhGFWciIs54TERpDUbgyxcB.jpg";
              const userId = user.userId;
              const createdUser = {
                id: "",
                username,
                avatar,
                createdAt,
                userId,
              };
              try {
                console.log("bum");
                handleCreateUser(createdUser);
              } catch (err) {
                console.log(err);
              } finally {
              }
            } else if (currentState === "signIn" && user) {
            }
            // navigate("/");
            return (
              <main>
                <button onClick={signOut}>Sign out</button>
              </main>
            );
          }}
        </Authenticator>
      </div>
    </>
  );
};

export default Login;
