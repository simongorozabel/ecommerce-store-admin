import axios from "axios";
import { Billboard } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await axios.get(`${URL}/${id}`);

  return res.data;
};

export default getBillboard;
