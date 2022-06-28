import { createStore } from 'redux'
import { rootreducer } from './Reducer/Index';


export const counterStore = () => {
    let store = createStore(rootreducer)

    return store ;
}
