import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card Slice',
    initialState: {
        allEmpolyes: [],
        searchedEmpolyes:[]
    },
    reducers: {
        addEmpoly: (state , action) => {
            state.allEmpolyes.push(action.payload)
        },
        removeEmpoly: (state , action) => {
            state.allEmpolyes = state.allEmpolyes.filter((Empoly) =>  Empoly.id!== action.payload)
            state.searchedEmpolyes = state.searchedEmpolyes.filter((Empoly) =>  Empoly.id!== action.payload)
        },
        searchEmpoly: (state , action) => {
            state.searchedEmpolyes = state.allEmpolyes.filter(el => el.userName === action.payload)
        }
    }
})


export const {addEmpoly , removeEmpoly ,searchEmpoly} = cardSlice.actions



export default cardSlice.reducer