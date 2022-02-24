export function countPositiveFeedbackPercentage(state) {
	
	return Math.round(state.good/(state.good+state.neutral+state.bad)*100)
}