import axios from "axios"
import { User } from "../models/user"
import { environment } from "../environment"


export const createUser = async (user: User) => {
    const response = await axios.post(`${environment.apiURL}/api/user/create-user`, user);
    return response.data;
}

export const fetchUser = async (userId: string) => {
    const reponse = await axios.get(`${environment.apiURL}/api/user/get-user/${userId}`);
    return reponse.data;
}