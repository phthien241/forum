import React, { useEffect, useMemo, useState } from "react";
import Amplify from "aws-amplify";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import { useNavigate } from "react-router-dom";
import useUserCreateUser from "../../hooks/userCreateUser";
import { User } from "../../models/user";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [visitedState, setVisitedState] = useState(new Set());
  const { route } = useAuthenticator((context) => [context.route]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (user) {
      handleCreateUser(user);
      navigate("/");
      return;
    }
    setVisitedState((prevStates) => new Set(prevStates).add(route));
  }, [route, user]);

  console.log(visitedState, route);
  const { handleCreateUser, isLoading, isError, success } = useUserCreateUser();
  return (
    <>
      <div className="login--form mt-12">
        <Authenticator>
          {({ signOut, user }) => {
            console.log(visitedState, route);
            if (
              visitedState.has("confirmSignUp") &&
              visitedState.has("authenticated") &&
              user
            ) {
              const username = user.username;
              const createdAt = new Date();
              const avatar =
                "https://as2.ftcdn.net/v2/jpg/02/09/70/41/1000_F_209704181_M6KX2j1O8uhGFWciIs54TERpDUbgyxcB.jpg";
              const userId = user.userId;
              const createdUser = {
                _id: "",
                username,
                avatar,
                createdAt,
                userId,
              };
              setUser(createdUser);
            } else if (
              !visitedState.has("confirmSignUp") &&
              visitedState.has("authenticated") &&
              user
            ) {
              navigate("/");
            }
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
