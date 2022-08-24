import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PizzasType } from "../../types";
import { pizzasRequests } from "../../api";
import { IGetPizzasQueryParams } from '../../types/index';

export const getPizzas = createAsyncThunk('pizzas/getPizzas', async (queryParams: IGetPizzasQueryParams, {dispatch}) => {
  const {sortBy, order} = queryParams;

  const pizzas = await pizzasRequests.getPizzas(sortBy, order);

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