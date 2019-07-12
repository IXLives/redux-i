import { MAKE_DEPOSIT, MAKE_WITHDRAWAL } from './actions'

// all state values need an initial value -- can be zero/empty
const initialState = {
	checking: 0,
    savings: 0,
    accountActivity: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case MAKE_DEPOSIT:
			const { amount, account, description } = action.payload
			const newAmount = state[account] + parseInt(amount)
            const newActivity = state.accountActivity.concat([
                `${new Date()} -- ${description} -- ${amount}`
            ])
            
			return {
                ...state,
                [account]: newAmount, //because we are using the variable as the object key! -- this saves us from using an if statement to detect the account
                accountActivity: newActivity,
            }
        case MAKE_WITHDRAWAL:
                const { amount, account, description } = action.payload
                const newAmount = state[account] - parseInt(amount)
                const newActivity = state.accountActivity.concat([
                    `${new Date()} -- ${description} -- ${amount}`
                ])
                
                return {
                    ...state,
                    [account]: newAmount, //because we are using the variable as the object key! -- this saves us from using an if statement to detect the account
                    accountActivity: newActivity,
                }
		default:
			return state
	}
}
