import { IProduct } from "./types";

export function addProductToCart(product: IProduct){
    return {
        type: 'ADD_PRODUCT_TO_CART',
        playload: {
            product
        }
    }
}