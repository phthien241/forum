import { useCallback, useState } from 'react';
import { User } from '../models/user';
import { createUser } from '../services/userService';



const useUserCreateUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    const handleCreateUser = useCallback(async (user: User) => {
        setIsLoading(true);
        setIsError(null);
        setSuccess(false);
        try {
            const response = await createUser(user);
            console.log(response);
        } catch (err) {
            setIsError(err as Error);
        } finally {
            setSuccess(true);
            setIsLoading(false);
        }
    }, []);

    return {handleCreateUser, isLoading, isError, success};
};

export default useUserCreateUser;