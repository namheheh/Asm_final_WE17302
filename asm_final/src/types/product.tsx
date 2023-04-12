export interface Iproduct {
    _id: string,
    name: string,
    price: number,
    image: string,
    categoryId: string
}
export interface DataType {
    key: React.Key;
    name: string;
    _id: string,
    price: number;
    image: string;
    description: string;
}
export interface ICategory {
    _id: string,
    name: string,
}
export interface IUser {
    _id: string,
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    role: string
}
