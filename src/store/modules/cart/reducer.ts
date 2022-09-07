import { Reducer } from "redux";
import { ICartState } from "./types";

import produce from 'immer'

const INITAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState> = (state = INITAL_STATE, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'ADD_PRODUCT_TO_CART': {
                const { product } = action.playload

                const productInCartIndex = draft.items.findIndex(item => {
                    item.product.id == product.id
                })

                if (productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++;
                }else {
                    draft.items.push({
                        product,
                        quantity: 1
                    })
                }

                break
            }
            default: {
                return draft
            }
        }
    })

}

export default cart