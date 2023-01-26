import { ContractDetails } from "../types/contracts";

export const filterContracts = (
  contracts: ContractDetails[],
  searchWord: string
) => {
  if (!searchWord.length || searchWord.length === 1) {
    return contracts;
  }

  return contracts.filter(
    (contract) =>
      contract.address.toLowerCase() === searchWord.toLowerCase() ||
      contract.customerName.toLowerCase() === searchWord.toLowerCase()
  );
};
