export interface PizzasType {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export interface IGetPizzasQueryParams {
  sortBy: string | null
  order: string | null
  category: string | null,
  title: string | null
}