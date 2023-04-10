import { ICat } from "../types/category";
import instance from "./instance";

const user = JSON.parse(localStorage.getItem('user')!);
const accessToken = user ? user.accessToken : undefined;
export const getAllCat = () => {
    return instance.get('/categories')
}
export const addCat = (cat: ICat) => {
    return instance.post('/categories', cat, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const removeCat = (id: number | string) => {
    return instance.delete(`/categories/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export const updateCat = (id: number | string, cat: ICat) => {
    return instance.put(`/categories/${id}`, cat, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}