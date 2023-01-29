import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import ErrorPopup from "../AlertDialog/AlertDialog";
import { getContracts } from "../../redux/contracts/actions";
import { filterContracts } from "../../utils/contracts";
import { ContractState } from "../../redux/contracts/types";
import "./list.scss";

function List() {
  const dispatch = useDispatch();
  const { isLoading, isError, contracts } = useSelector(
    (state: { contracts: ContractState }) => state.contracts
  );

  const [searchWord, setSearchWord] = useState<string>("");

  const filteredContracts = filterContracts(contracts, searchWord);

  const fetchContracts = () => {
    dispatch(getContracts());
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  return (
    <div className="list">
      <div className="list-title">Contracts</div>
      {!isLoading && !isError && (
        <div className="list-content">
          <form onSubmit={(e: React.SyntheticEvent) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search Customer"
              className="list-search"
              value={searchWord}
              onChange={(event) => setSearchWord(event.target.value)}
            />
          </form>
          <div className="list-items">
            {filteredContracts.map((contract) => (
              <Card
                key={contract.id + contract.projectId}
                contract={contract}
              />
            ))}
          </div>
        </div>
      )}
      {!isLoading && isError && (
        <ErrorPopup
          title="Oops!"
          text="Something went wrong."
          action={fetchContracts}
        />
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default List;
