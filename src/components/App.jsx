import { Component } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

import { countTotalFeedback } from "utils/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "utils/countPositiveFeedbackPercentage";


export class App extends Component {
	state = {
  good: 0,
  neutral: 0,
  bad: 0
}

checkForEmptyFeedback = () => {
const allFeedbackValues = Object.values(this.state);
const check = allFeedbackValues.every(value => value === 0);
	return check;
}


onLeaveFeedback = (e) => {
	const value = e.target.textContent;

this.setState((prev)=>{
return {
	[value]: prev[value] + 1
}
})
}
render(){

	  return (<>
	  		<Section title="please leave feedback">
			<FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
		</Section>

		<Section title="statistics">

		  {this.checkForEmptyFeedback() 
		  ? <Notification message="There is no feedback"/> 
		  : <Statistics 
		  	good={this.state.good}
		   neutral={this.state.neutral}
			 bad={this.state.bad}
			  total={countTotalFeedback(this.state)}
			   positivePercentage={countPositiveFeedbackPercentage(this.state)}>
				</Statistics>} 

	  </Section>
	  </>);
}
}

