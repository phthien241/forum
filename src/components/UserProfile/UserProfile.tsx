import React, { useEffect, useState } from "react";
import "./UserProfile.scss";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import useGetUser from "../../hooks/userGetUser";
import { User } from "../../models/user";
import { fetchUser } from "../../services/userService";

const UserProfile: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
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
        </div>
      )}
    </>
  );
};

export default UserProfile;
