import {createStore} from 'redux'

const dummyFunction=()=>{
    return 1000
}
const store = createStore(dummyFunction)


export default store;