import React, { useState } from "react";
import "./UserProfile.scss";
import avatar from "../../assets/avatar.jpg";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import useGetUser from "../../hooks/userGetUser";

const UserProfile: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { route } = useAuthenticator((context) => [context.route]);
  const { currentUser, isLoading, isError, success } = useGetUser(
    user.userId,
    route==="authenticated"
  );

  return (
    <>
      {currentUser&& route==="authenticated" && (
        <div className="user-profile-">
          <div className="user-profile--avatar">
            <img src={currentUser.avatar} alt="avatar" />
          </div>
          <div className="user-profile--name">
            <h3>currentUser.username</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
