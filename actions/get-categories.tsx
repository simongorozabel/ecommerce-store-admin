import axios from "axios";
import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category> => {
  const res = await axios.get(URL);

  return res.data;
};

export default getCategories;
