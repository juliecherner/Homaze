export type ContractDetails = {
  id: string;
  customerName: string;
  projectId: string;
  address: string;
  rooms: Room[];
  updated_timestmp: number;
  totalProject: number;
  projectState: string;
};

type Room = {
  id: number;
  name: string;
};
