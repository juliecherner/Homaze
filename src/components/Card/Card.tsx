import moment from "moment";
import { formatTotalSum } from "../../utils/card";
import { ContractDetails } from "../../types/contracts";
import "./card.scss";

const fieldsNames: Record<string, string> = {
  id: "ID: ",
  lastUpdated: "Last updated",
  total: "Total",
  stage: "Stage",
};

const stageClasses: Record<string, string> = {
  "In progress": "in-progress",
  Done: "done",
  Cancelled: "canceled",
  Negotiation: "negotiation",
};

type CardProps = {
  contract: ContractDetails;
};

function Card({ contract }: CardProps) {
  const customerNameClass = contract.customerName
    ? "card-title-name bold"
    : "card-title-name light-font";

  const formattedUpdateTime = moment(contract.updated_timestmp).format(
    "MM.DD.YYYY"
  );

  const totalSum = formatTotalSum(contract.totalProject);

  return (
    <div className="card">
      <div className="card-title">
        <div className="card-title-content">
          <div className={customerNameClass}>
            {contract.customerName || "Untitled"}
          </div>
          <div className="card-subtitle">
            {fieldsNames.id}
            {contract.projectId}
          </div>
        </div>
      </div>
      <div className="card-address">{contract.address}</div>
      <div className="card-rooms">
        {contract.rooms.map((room) => (
          <div key={room.id} className="card-room-item">
            {room.name}
          </div>
        ))}
      </div>
      <div className="card-general-info">
        <div className="card-general-info-column updated">
          <div className="card-general-info-title">
            {fieldsNames.lastUpdated}
          </div>
          <div className="card-general-info-details-updated">
            {formattedUpdateTime}
          </div>
        </div>
        <div className="card-general-info-column total">
          <div className="card-general-info-title">{fieldsNames.total}</div>
          <div className="card-general-info-details-total">{totalSum}</div>
        </div>
        <div className="card-general-info-column stage">
          <div className="card-general-info-title stage-title">
            {fieldsNames.stage}
          </div>
          <div
            className={
              "card-general-info-details-stage " +
              stageClasses[contract.projectState]
            }
          >
            {contract.projectState}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
