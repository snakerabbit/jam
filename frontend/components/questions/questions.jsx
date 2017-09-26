import React from 'react';
import {withRouter} from 'react-router-dom';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.answeredQuestions = this.answeredQuestions.bind(this);
    this.responseIds = this.responseIds.bind(this);
    this.answeredQuestionsDisplay = this.answeredQuestionsDisplay.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestions();
    this.props.fetchResponses();
  }

  answeredQuestions () {

    if(Object.keys(this.props.responses).length !== 0) {
      return Object.keys(this.props.responses).map(response => {
        return this.props.responses[response].question;
      });
    }
  }

  responseIds() {
    if(Object.keys(this.props.responses).length !== 0) {
      return Object.keys(this.props.responses).map(response => {
        return this.props.responses[response].answer_id;
      });
    }
  }

  answeredQuestionsDisplay(){
    const answeredQuestions = this.answeredQuestions().map( question => {
      const questionAnswers = this.props.questions[question.id].answers;
      const answerDisplay = questionAnswers.map(answer => {
        if(this.responseIds().includes(answer.id)){
          return <p key={answer.id}>{answer.body + " ✓"}</p>;
        } else {
          return <p key={answer.id}>{answer.body}</p>;
        }
      });
      return(
        <div key={question.id}>
          <p>{question.body}</p>
          {answerDisplay}
        </div>
      );
    });
    return(
      <div>{answeredQuestions}</div>
    );
  }

  render() {
    if(Object.keys(this.props.questions).length === 0 || Object.keys(this.props.responses).length === 0) {
      return(
        <div>
          <h3>No Questions Answered</h3>
        </div>
      );
    } else {
      return(
        <div>
          {this.answeredQuestionsDisplay()}
        </div>
      );
    }
  }

}

export default Questions;
