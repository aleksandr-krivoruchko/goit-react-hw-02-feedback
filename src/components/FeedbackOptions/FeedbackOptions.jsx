import PropTypes from 'prop-types';

export function FeedbackOptions({onLeaveFeedback}) {
   return (<>
      <button type="button" className='btn btn--good'
		 onClick={onLeaveFeedback}>good</button>

		<button type="button" className='btn btn--neutral'
		 onClick={onLeaveFeedback}>neutral</button>

		<button type="button" className='btn btn--bad'
		 onClick={onLeaveFeedback}>bad</button>
   	</>);
}

FeedbackOptions.protoTypes={
	onLeaveFeedback: PropTypes.func,
}