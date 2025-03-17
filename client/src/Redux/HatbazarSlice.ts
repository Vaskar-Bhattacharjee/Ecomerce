import { createSlice } from "@reduxjs/toolkit";



const initialState: { 
    productsData: { 
        _id: string;
        title: string;
        category: string;
        image: string;
        quantity: number;
    }[]; 
    userInfo: any; 
} = {
    productsData: [],
    userInfo: null,
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
            
        }
    }
});
export const { addToCart } = HatbazarSlice.actions;
export default HatbazarSlice.reducer;

