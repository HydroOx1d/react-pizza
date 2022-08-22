import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PizzasType } from "../../types";
import { pizzasRequests } from "../../api";

export const getPizzas = createAsyncThunk('pizzas/getPizzas', async (_, {dispatch}) => {
  const pizzas = await pizzasRequests.getPizzas();

  dispatch(setPizzas(pizzas.data))
})

type InitialStateType = {
  pizzas: PizzasType[] | null
  pizzasIsLoading: boolean
}

const initialState: InitialStateType = {
  pizzas: null,
  pizzasIsLoading: true
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state: InitialStateType, action: PayloadAction<PizzasType[]>) {
      state.pizzas = action.payload;
    }
  },
  extraReducers: {
    [getPizzas.fulfilled.type]: (state: InitialStateType) => {
      state.pizzasIsLoading = false
    }, 
  }
})

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer