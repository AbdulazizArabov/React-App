import { configureStore } from '@reduxjs/toolkit'
import counterBasket  from '../features/basketer/counterBasket'

export const store = configureStore({
    reducer: {
        basket: counterBasket
    }
})