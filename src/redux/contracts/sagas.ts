import { call, put, takeEvery } from "redux-saga/effects";
import { setContracts, setError, setLoading } from "./actions";
import { requestGetContracts } from "../../api/contracts";
import { Constants } from "./constants";
import { ContractDetails } from "../../types/contracts";

export function* handleGetContracts() {
  yield put(setLoading(true));

  try {
    // const response: { data: ContractDetails[] } = yield call(
    //   requestGetContracts
    // );
    //yield put(setContracts(response?.data));
    const object = [
      {
        id: "4",
        customerName: "Billy bob thornton",
        projectId: "MA-P-10006",
        address: "249 Bowery, New York, NY 10002, USA",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1668238051000,
        totalProject: 11250,
        projectState: "In progress",
      },
      {
        id: "8",
        customerName: "Alex Jr. VeryLongNameAndCroppedForSure",
        projectId: "MA-P-10005",
        address: "220 Lake Strasse, Saint Louis, MO 59569, USA",
        rooms: [
          {
            id: 1,
            name: "Living Room",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1670830051000,
        totalProject: 11770,
        projectState: "Done",
      },
      {
        id: "7",
        customerName: "Jane Davis",
        projectId: "MA-P-10002",
        address: "4 Dear Valley with Live Dears, Oklahoma, Ohio",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1670916451000,
        totalProject: 11250,
        projectState: "Cancelled",
      },
      {
        id: "66",
        customerName: "John Doe",
        projectId: "MA-P-10003",
        address: "67 Bower, New York, NY 55555, USA",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1671089251000,
        totalProject: 110,
        projectState: "Negotiation",
      },
      {
        id: "88",
        customerName: "Alex Wonderman",
        projectId: "MA-P-10001",
        address: "234 Pure Porsche Power, Zimmerland, NJ 34565, USA",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1671694051000,
        totalProject: 5253,
        projectState: "Done",
      },
      {
        id: "32",
        customerName: "Jimmy Carter",
        projectId: "MA-P-10033",
        address: "123 My Dream Street, Miami, Florida 456, USA",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1671780451000,
        totalProject: 1250,
        projectState: "Cancelled",
      },
      {
        id: "16",
        customerName: "",
        projectId: "MA-P-10222",
        address: "45454 Pure BMW Power, Saint Mountains, MO 45456, USA",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1671866851000,
        totalProject: 11250,
        projectState: "In progress",
      },
      {
        id: "16",
        customerName: "Baraq Obama",
        projectId: "MA-P-10221",
        address: "220 Bowery, New York, NY 10002, USA",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1671953251000,
        totalProject: 2250,
        projectState: "In progress",
      },
      {
        id: "5",
        customerName: "Your neighbor",
        projectId: "MA-P-105544",
        address: "58 Bowery, New York, NY 10002, USA",
        rooms: [
          {
            id: 1,
            name: "Kitchen",
          },
          {
            id: 2,
            name: "Bathroom",
          },
          {
            id: 3,
            name: "Bedroom",
          },
        ],
        updated_timestmp: 1672126051000,
        totalProject: 9250,
        projectState: "In progress",
      },
    ];
    yield put(setContracts(object));
  } catch (error) {
    yield put(setError());
  }
}

export function* contractSaga() {
  yield takeEvery(Constants.GET_CONTRACTS, handleGetContracts);
}
