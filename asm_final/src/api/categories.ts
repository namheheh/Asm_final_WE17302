import instance from "./instance"
import { ICategory } from "../types/product";

export const getAllCategory = () => {
    return instance.get("/categories");
}
export const getOneCategory = (_id: string) => {
    return instance.get("/categories/" + _id);
}
export const RemoveCategory = (_id: string) => {
    return instance.delete("/categories/" + _id);
}
export const CreateCategory = (category: ICategory) => {
    return instance.post("/categories", category);
}
export const updateCategory = (category: ICategory) => {
    return instance.put("/categories/" + category._id, category);
}
