import { Constants } from "./constants";
import { ContractDetails } from "../../types/contracts";

export const getContracts = () => {
  return { type: Constants.GET_CONTRACTS };
};

export const setContracts = (contracts: ContractDetails[]) => {
  return { type: Constants.SET_CONTRACTS_SUCCESS, payload: contracts };
};

export function setError() {
  return { type: Constants.SET_ERROR };
}

export function setLoading(isLoading: boolean) {
  return {
    type: Constants.SET_LOADING,
    payload: isLoading,
  };
}
