// 1. Create an interface representing a document in MongoDB.
export interface IProduct {
    _id: string;
    name: string,
    description: string,
    quantity: number,
    price: number,
    image: string,
    onSale: boolean,
    categoryId: string
}