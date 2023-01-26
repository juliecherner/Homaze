import { ContractDetails } from "../../types/contracts";

const fieldsNames: Record<string, string> = {
  id: "ID",
  lastUpdated: "Last updated",
  total: "Total",
  stage: "Stage",
};

type CardProps = {
  contract: ContractDetails;
};

function Card({ contract }: CardProps) {
  return (
    <div className="card">
      <div>{contract.customerName}</div>
      <div>{contract.projectId}</div>
      <div>{contract.address}</div>
      <div>
        {contract.rooms.map((room) => (
          <div key={room.id}>{room.name}</div>
        ))}
      </div>
      <div>{contract.updated_timestmp}</div>
      <div>{contract.totalProject}</div>
      <div>{contract.projectState}</div>
    </div>
  );
}

export default Card;
