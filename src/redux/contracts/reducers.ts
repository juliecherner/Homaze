import { Constants } from "./constants";
import { ContractState, Action } from "./types";

const initialState: ContractState = {
  isLoading: false,
  isError: false,
  contracts: [],
};

export const contractsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Constants.SET_CONTRACTS_SUCCESS: {
      return { ...state, contracts: action.payload, isError: false };
    }
    case Constants.SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case Constants.SET_ERROR: {
      return { ...state, isError: true };
    }
    default: {
      return state;
    }
  }
};
