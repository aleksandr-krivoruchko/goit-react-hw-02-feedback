import { Component } from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";


export class App extends Component {
	state = {
  good: 0,
  neutral: 0,
		bad: 0,
	}
	
	countPositiveFeedbackPercentage = (state) => Math.round(state.good / (state.good + state.neutral + state.bad) * 100);
	
	countTotalFeedback = (state) => (state.good + state.neutral + state.bad);

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
			<FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={Object.keys(this.state)}/>
		</Section>

		<Section title="statistics">
		  {this.countTotalFeedback(this.state) <= 0 
		  ? <Notification message="There is no feedback"/> 
		  : <Statistics 
		  	good={this.state.good}
		   neutral={this.state.neutral}
			 bad={this.state.bad}
			  total={this.countTotalFeedback(this.state)}
			   positivePercentage={this.countPositiveFeedbackPercentage(this.state)}>
				</Statistics>} 
	  </Section>
	  </>);
}
}

