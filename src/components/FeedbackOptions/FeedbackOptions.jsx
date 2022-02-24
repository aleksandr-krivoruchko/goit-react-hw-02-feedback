import PropTypes from 'prop-types';


export function FeedbackOptions(options, onLeaveFeedback) {
   return (<>
      <button type="button" className='btn btn--good'>Good</button>
         <button type="button" className='btn btn--neutral'>Neutral</button>
         <button type="button" className='btn btn--bad'>Bad</button>
   </>);
}

