import React from 'react';
import QuestionsContainer from './questions_container';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.answeredQuestions = this.answeredQuestions.bind(this);
    this.userAnswerIds = this.userAnswerIds.bind(this);
    this.acceptedAnswers = this.acceptedAnswers.bind(this);
    this.answeredQuestionsDisplay = this.answeredQuestionsDisplay.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestions();
    this.props.fetchUserAnswers(this.props.currentUser);
  }

  answeredQuestions(){
    if(this.props.userAnswers) {
      return(
        Object.keys(this.props.userAnswers).map(userAnswer => {
          return this.props.userAnswers[userAnswer].question;
        })
      );
    }
  }

  userAnswerIds () {
    return(
      Object.keys(this.props.userAnswers).map(userAnswer =>{
        return this.props.userAnswers[userAnswer].answer_id;
      })
    );
  }

  acceptedAnswers (questionId) {
    let accepted = null;
    Object.keys(this.props.userAnswers).forEach(userAnswer =>{
      if(this.props.userAnswers[userAnswer].question.id === questionId){
        accepted = this.props.userAnswers[userAnswer].accepted_choices;
      }
    });

    return accepted;
  }

  answeredQuestionsDisplay(){
    const answeredQuestions = this.answeredQuestions().map( question => {
      const answers = this.props.questions[question.id].answers;
      const answerDisplay = answers.map(answer => {
        if(this.userAnswerIds().includes(answer.id)){
          return <p key={answer.id} >{answer.answer_body + " ✓"}</p>;
        } else if (this.acceptedAnswers(question.id).include(answer.answer_body)) {
          return <p key={answer.id}>{answer.answer_body}</p>;
        } else {
          return <p key={answer.id}>{answer.answer_body}</p>;
        }
      });
      return(
        <div key={question.id}>
          <p>{question.body}</p>
          <div>{answerDisplay}</div>
        </div>
      );
    });
    return(
      <div>
        {answeredQuestions}
      </div>
    );
  }

  render (){
    console.log(this.props.questions);
    return(
      <div></div>
    );
  }
}

export default Questions;
