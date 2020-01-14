import axios from "axios";
import { baseUrl } from "../config/config";

export const getItems = async () => {
  const response = await axios({
    url: baseUrl,
    method: "get"
  });
  return response;
};
