import instance from "./instance";
import { IUser } from "../types/user";

export const login = (user: IUser) => {
    return instance.post('/signin', user)

}