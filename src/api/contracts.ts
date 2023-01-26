import axios from "axios";
import { ContractDetails } from "../types/contracts";

export const requestGetContracts = async (): Promise<ContractDetails[]> => {
  const url = process.env.REACT_APP_API_URL as string;
  return axios.get(url);
};
