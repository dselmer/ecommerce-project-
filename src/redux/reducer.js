
import {add_to_cart} from './constant'
import {remove_from_cart} from './constant'

export  const cartData = (data=[],action)=>{
    // console.warn('reducer called',action);
    // if(action.type === add_to_cart){
    //     return data
    // }else{
    //     return 'no data found'
    // }

    switch(action.type){
        case add_to_cart:
            console.warn('reducer called',action)
            return 1+1
        case remove_from_cart:
            console.warn('reducer called',action)
            return 1+1
        default:
            return 'no data found'
    }
}
