import { Constants } from "./constants";
import { ContractDetails } from "../../types/contracts";

export type ContractState = {
  isLoading: boolean;
  isError: boolean;
  contracts: ContractDetails[];
};

type GetContractsSuccessAction = {
  type: Constants.SET_CONTRACTS_SUCCESS;
  payload: ContractDetails[];
};

type SetLoadingAction = {
  type: Constants.SET_LOADING;
  payload: boolean;
};

type SetErrorAction = {
  type: Constants.SET_ERROR;
  payload: boolean;
};

export type Action =
  | GetContractsSuccessAction
  | SetLoadingAction
  | SetErrorAction;
