import { MAKE_DEPOSIT } from "./actions";

const initialState = {
  checking: 100,
  savings: 5,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case MAKE_DEPOSIT:
            const {amount, account} = action.payload
            const newAmount = parseInt(amount) + state[action.payload.account]
            return {
                ...state,
                [account]: newAmount,
            }
        default:
            return state
    }
}
