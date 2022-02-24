import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

import state from "../components/state.json";

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
		  <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={state.good+state.neutral+state.bad} positivePercentage={Math.round(state.good/(state.good+state.neutral+state.bad)*100)}></Statistics>
	  </Section>



    </div>
  );
};
