import { MAKE_DEPOSIT, MAKE_WITHDRAWAL } from './actions'

// all state values need an initial value
const initialState = {
	checking: 0,
	savings: 0,
	accountActivity: [],
}

export default function(state = initialState, action) {
    // const { amount, account, description } = action.payload

	switch (action.type) {
		case MAKE_DEPOSIT: {
			const { amount, account, description } = action.payload
			const newAmount = parseInt(amount) + state[account]
			const newActivity = state.accountActivity.concat([
				// adding more data to the description before it goes into store
				`${new Date()}, ${description}, ${amount}`,
			])
			
			return {
				...state,
				[account]: newAmount,
				accountActivity: newActivity,
			}
		}
		// NOTE: SAME AS MAKE_DEPOSIT, TWEAKED SO IT SUBTRACTS INSTEAD OF ADDS
		case MAKE_WITHDRAWAL: {
			const { amount, account, description } = action.payload
			const newAmount = state[account] - parseInt(amount)
			const newActivity = state.accountActivity.concat([
				// adding more data to the description before it goes into store
				`${new Date()}, ${description}, -${amount}`,
			])
			
			return {
				...state,
				[account]: newAmount,
				accountActivity: newActivity,
			}
		}
		default:
			return state
	}
}
