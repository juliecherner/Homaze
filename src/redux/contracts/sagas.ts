import { call, put, takeEvery } from "redux-saga/effects";
import { setContracts, setError, setLoading } from "./actions";
import { requestGetContracts } from "../../api/contracts";
import { Constants } from "./constants";
import { ContractDetails } from "../../types/contracts";

export function* handleGetContracts() {
  yield put(setLoading(true));

  try {
    const response: { data: ContractDetails[] } = yield call(
      requestGetContracts
    );
    yield put(setContracts(response?.data));
  } catch (error) {
    yield put(setError());
  }
}

export function* contractSaga() {
  yield takeEvery(Constants.GET_CONTRACTS, handleGetContracts);
}
