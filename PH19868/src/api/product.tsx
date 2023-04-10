import instance from "./instance";
interface IProduct {
    id: number,
    name: string,
    price: number
}

const user = JSON.parse(localStorage.getItem('user')!);
const accessToken = user ? user.accessToken : undefined;
const getAllProduct = () => {
    return instance.get('/products?_page=1&limit=10')
}
const getOneProduct = (id: number) => {
    return instance.get(`/products/${id}`)
}
const addProduct = (product: IProduct) => {
    return instance.post('/add', product, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
const deleteProduct = (id: number) => {
    return instance.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
const updateProduct = (id: number | string, product: IProduct) => {
    return instance.patch(`/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}
export { getAllProduct, getOneProduct, addProduct, deleteProduct, updateProduct }
