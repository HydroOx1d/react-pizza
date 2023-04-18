import axios from 'axios';
import { PizzasType } from '../types/index';

export const pizzasRequests = {
  getPizzas: async (sortBy: string | null, order: string | null, category: string | null) => {
    const sortByQuery = sortBy && `sortBy=${sortBy}`
    const orderQuery = order && `order=${order}`
    const categoryQuery = category && `category=${category}`
    return await axios.get<PizzasType[]>(`https://6303917a761a3bce77da10ff.mockapi.io/api/pizzas?${sortByQuery}&${orderQuery}&${categoryQuery}`);
  }
}