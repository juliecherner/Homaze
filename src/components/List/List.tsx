import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import ErrorPopup from "../AlertDialog/AlertDialog";
import { getContracts } from "../../redux/contracts/actions";
import { filterContracts } from "../../utils/contracts";
import { ContractState } from "../../redux/contracts/types";

function List() {
  const seacrhWordRef = useRef(null);
  const dispatch = useDispatch();

  const { isLoading, isError, contracts } = useSelector(
    (state: { contracts: ContractState }) => state.contracts
  );

  const filteredContracts = filterContracts(contracts, "");
  console.log("seacrhWordRef", seacrhWordRef.current);
  console.log("filteredContracts", filteredContracts);

  const fetchContracts = () => {
    dispatch(getContracts());
  };

  useEffect(() => {
    fetchContracts();
  }, [dispatch]);

  return (
    <div>
      {!isLoading && !isError && (
        <div className="list">
          <form onSubmit={(e: React.SyntheticEvent) => e.preventDefault()}>
            <input type="text" ref={seacrhWordRef} />
            <button>Search</button>
          </form>
          {filteredContracts.map((contract) => (
            <Card key={contract.id} contract={contract} />
          ))}
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
