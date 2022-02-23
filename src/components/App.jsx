import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
     <Section title="please leave feedback">
	  {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
	  </Section>
	       <Section title="statistics">
		  {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
	  </Section>



    </div>
  );
};
