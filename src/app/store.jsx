import {configureStore} from "@reduxjs/toolkit"
import generalReducer from './slices/genral'


export const store = configureStore({
    reducer:{
        general:generalReducer, 
    },
})