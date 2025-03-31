import { createSlice } from "@reduxjs/toolkit";



const initialState: { 
    productsData: { 
        _id: string;
        title: string;
        category: string;
        image: string;
        quantity: number;
        price: number;
    }[]; 
    userInfo: {
        _id: string;
        name: string;
        email: string;
    }[]; 
} = {
    productsData: [],
    userInfo: [],
};


export const HatbazarSlice = createSlice({
    name: "hatbazar",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productsData.find(
                (item) => item._id === action.payload._id
            );
            if(item){
                item.quantity += action.payload.quantity;
            }else{
                state.productsData.push(action.payload);
            }
        },
        deleteToCart: (state, action) => {
            state.productsData = state.productsData.filter(
                (item) => item._id !== action.payload
            )
        },
        clearCart: (state) => {
            state.productsData = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.productsData.find(
                (item) => item._id === action.payload
            );
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productsData.find(
                (item) => item._id === action.payload
            )
            if (item) {
                item.quantity -= 1;
            }           

        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = [];
        }
    }
});
export const { addToCart,
    deleteToCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
    addUser,
    removeUser } = HatbazarSlice.actions;
export default HatbazarSlice.reducer;
