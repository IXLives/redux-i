import axios from "axios";

// action type
export const MAKE_DEPOSIT = "MAKE_DEPOSIT";
export const MAKE_WITHDRAWAL = "MAKE_WITHDRAWAL";

// our loading state - sets to this immediately
export const GET_ACCOUNT_START = "GET_ACCOUNT_START";
// if the request completes successfully
export const GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS";
// if the request fails
export const GET_ACCOUNT_FAILED = "GET_ACCOUNT_FAILED";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_START = "LOGIN_START";

// action creator
export function makeDeposit(amount, account, description) {
  // action
  return {
    type: MAKE_DEPOSIT,
    payload: {
      amount,
      account,
      description
    }
  };
}

export function makeWithdrawal(amount, account, description) {
  return {
    type: MAKE_WITHDRAWAL,
    payload: {
      amount,
      account,
      description
    }
  };
}

export function getAccount() {
  // can return a function because we're using redux-thunk
  return dispatch => {
    // receives direct access to the dispatcher
    // enter the "loading" state
    dispatch({ type: GET_ACCOUNT_START });

    const headers = {
      Authorization: localStorage.getItem('token')
    }

    axios
      .get("http://localhost:8080/", {headers})
      .then(res => {
        dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_ACCOUNT_FAILED, payload: err.response.data });
      });
  };
}

export default function login(username, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START });

    return axios.post("http://localhost:8080/login", {username, password})
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({type: LOGIN_SUCCESS})
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err
        dispatch({type: LOGIN_FAILED, payload})
      })
  };
}
