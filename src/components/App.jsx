import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = nameReview => {
    this.setState((objState) => {
      return {
        [nameReview]: objState[nameReview] + 1,
      };
    })
  }
  
  reset() { 
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }
  
  countTotalFeedback() { 
    let total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
    return total;
    
  }

  countPositiveFeedbackPercentage() { 
    let total = this.countTotalFeedback();
    let positivePercentage = Math.ceil(this.state.good * 100 / total);
    return positivePercentage;
  }

  render() {
    let total = this.countTotalFeedback();
    let positivePercentage = this.countPositiveFeedbackPercentage() || 0;
    let options = Object.keys(this.state);
    return (
      <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
    
        <Section title="Statistics">
          {total > 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage}
          /> : <Notification message="There is no feedback !"></Notification>}
        </Section>
      </div>
    );
   }
  }
