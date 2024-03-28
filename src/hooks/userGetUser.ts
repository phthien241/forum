import axios from "axios";
import { useState, useEffect } from "react";
import { fetchUser } from "../services/userService";
import { User } from "../models/user";

const useGetUser = (userId: string, isAuthenticated:boolean) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const getUser = async () => {
    setIsLoading(true);
    setIsError(null);
    setSuccess(false);
    try {
      const user = await fetchUser(userId);
      setCurrentUser(user);
    } catch (err) {
      setIsError(err as Error);
    } finally {
      setSuccess(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(!isAuthenticated) return;
    getUser();
  }, [userId,isAuthenticated]);

  return {currentUser,isLoading,isError,success};
};

export default useGetUser;
