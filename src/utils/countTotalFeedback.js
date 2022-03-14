export function countTotalFeedback(state) {

	return state.good + state.neutral + state.bad;
}