import moment from "moment";
import { ContractDetails } from "../../types/contracts";
import "./card.scss";

const fieldsNames: Record<string, string> = {
  id: "ID: ",
  lastUpdated: "Last updated",
  total: "Total",
  stage: "Stage",
};

const stageClasses: Record<string, string> = {
  "In progress": "in-progress-button",
  Done: "done-button",
  Cancelled: "canceled-button",
  Negotiation: "negotiation-button",
};

type CardProps = {
  contract: ContractDetails;
};

function Card({ contract }: CardProps) {
  const customerNameClass = contract.customerName
    ? "card-title-name-bold"
    : "card-title-name";

  const formattedUpdateTime = moment(contract.updated_timestmp).format(
    "MM.DD.YYYY"
  );

  return (
    <div className="card">
      <div className="card-title">
        <div className={customerNameClass}>
          {contract.customerName || "Untitled"}
        </div>
        <div className="card-subtitle">
          {fieldsNames.id}
          {contract.projectId}
        </div>
      </div>
      <div className="card-address">
        <div>{contract.address}</div>
      </div>
      <div className="card-rooms">
        {contract.rooms.map((room) => (
          <div key={room.id} className="card-room-item">
            {room.name}
          </div>
        ))}
      </div>
      <div className="card-general-info">
        <div className="card-general-info-titles">
          <div>{fieldsNames.lastUpdated}</div>
          <div className="card-general-info-title">{fieldsNames.total}</div>
          <div className="card-general-info-title">{fieldsNames.stage}</div>
        </div>

        <div className="card-general-info-details">
          <div className="card-general-info-details-update">
            {formattedUpdateTime}
          </div>
          <div className="card-general-info-details-total">
            {"$".toString()}
            {contract.totalProject}
          </div>
          <div className={stageClasses[contract.projectState]}>
            {contract.projectState}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
