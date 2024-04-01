import React, { useEffect, useState } from "react";
import "./UserProfile.scss";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import useGetUser from "../../hooks/userGetUser";
import { User } from "../../models/user";
import { signOut } from "aws-amplify/auth";

const UserProfile: React.FC = () => {
  const { user,signOut } = useAuthenticator((context) => [context.user]);
  const { handleGetUser, isLoading, isError, success } = useGetUser();

  const [currentUser, setCurrentUser] = useState<User>();
  useEffect(() => {
    if (user) {
      handleGetUser(user.userId)
        .then((fetchedUser) => {
          setCurrentUser(fetchedUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <>
      {currentUser && (
        <div className="user-profile">
          <div className="user-profile--avatar">
            <img src={currentUser.avatar} alt="avatar" />
          </div>
          <div className="user-profile--name">
            <h3>{currentUser.username}</h3>
          </div>
          <div>
            
          </div>
          <button onClick={signOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded my-2 ml-2">
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserProfile;
