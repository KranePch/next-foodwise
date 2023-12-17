export type PriceHistoryItem = {
  price: number;
};

export type User = {
  email: string;
};

export type Product = {
  _id?: string;
  url: string;
  foodName: string;
  quantity: string;
  image: string;
  categoriesArray: string[] | [];
  gradeNutrition: string;
};