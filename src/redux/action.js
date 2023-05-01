import {add_to_cart} from './constant'

export const addToCart = (data)=>{
    console.warn('added to cart',data)
    return {
        type:add_to_cart,
        data
    }
}

