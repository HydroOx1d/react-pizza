import axios from 'axios';
import { PizzasType } from '../types/index';

export const pizzasRequests = {
  getPizzas: async (sortBy: string | null, order: string | null) => {
    return await axios.get<PizzasType[]>(`https://6303917a761a3bce77da10ff.mockapi.io/api/pizzas?sortBy=${sortBy !== null && sortBy}&order=${order !== null && order}`);
  }
}