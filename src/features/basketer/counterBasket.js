import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("basket")) || [],
}

export const counterBasket = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addLink: (state, action) => {
            let newData = [...state.value, action]
            state.value = newData
            console.log(newData)
            localStorage.setItem("basket", JSON.stringify([newData]))
        }
    }
})

export const { addLink } = counterBasket.actions

export default counterBasket.reducer