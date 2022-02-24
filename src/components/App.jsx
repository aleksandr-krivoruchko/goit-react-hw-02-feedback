import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { countTotalFeedback } from "../utils/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "utils/countPositiveFeedbackPercentage";

import state from "components/state.json";


const totalFeedback = countTotalFeedback(state);
const positivePercentage = countPositiveFeedbackPercentage(state);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 30,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
     <Section title="please leave feedback">
	  <FeedbackOptions ></FeedbackOptions>
	  </Section>
	       <Section title="statistics">
		  <Statistics 
		  good={state.good}
		   neutral={state.neutral}
			 bad={state.bad}
			  total={totalFeedback}
			   positivePercentage={positivePercentage}>
				</Statistics>
	  </Section>



    </div>
  );
};
