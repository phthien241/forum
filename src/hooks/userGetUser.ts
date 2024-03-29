import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { fetchUser } from "../services/userService";
import { User } from "../models/user";

const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const handleGetUser = useCallback(async (userId: string) => {
    setIsLoading(true);
    setIsError(null);
    setSuccess(false);
    try {
      const response = await fetchUser(userId);
      return response;
    } catch (err) {
      setIsError(err as Error);
      throw err;
    } finally {
      setSuccess(true);
      setIsLoading(false);
    }
  }, []);

  return { handleGetUser, isLoading, isError, success };
}

  export default useGetUser;
