import { Iproduct } from "../types/product";
import instance from "./instance";
const user = JSON.parse(localStorage.getItem("user")!);
const getAllProduct = () => {
    return instance.get("/product");
}
const getProduct = (id: number | string) => {
    return instance.get("/product/" + id)
}
const deleteProduct = (id: number | string) => {
    return instance.delete(`/product/${id}`, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}
const addProduct = (products: Iproduct) => {
    return instance.post('/product', products, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
}
export { getAllProduct, getProduct, deleteProduct, addProduct };