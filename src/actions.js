import axios from 'axios'

// action type
export const MAKE_DEPOSIT = "MAKE_DEPOSIT";
export const MAKE_WITHDRAWAL = "MAKE_WITHDRAWAL";

// finite states
// loading state -- immediate
export const GET_ACCOUNT_START = 'GET_ACCOUNT_START'
// loaded -- success
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
// loaded -- failure
export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE'


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
  // can return a function because we're using redux-thunk!
  return (dispatch) => {
    // enter loading state
    dispatch({ type: GET_ACCOUNT_START })

    axios.get('http://localhost:8080/')
    // Success
    .then((res) => {
      dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data })
    })
    // Failure
    .catch((err) => {
      dispatch({ type: GET_ACCOUNT_FAILURE, payload: err })
    })
  }
}