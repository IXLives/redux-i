// action type
export const MAKE_DEPOSIT = "MAKE_DEPOSIT";
export const MAKE_WITHDRAWAL = "MAKE_WITHDRAWAL";

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
