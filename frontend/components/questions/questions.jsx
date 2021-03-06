import React from 'react';
import {withRouter} from 'react-router-dom';
import QuestionFormContainer from './question_form_container';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      edit: false
    };
    this.answeredQuestions = this.answeredQuestions.bind(this);
    this.responseIds = this.responseIds.bind(this);
    this.answeredQuestionsDisplay = this.answeredQuestionsDisplay.bind(this);
    this.renderQuestionForm = this.renderQuestionForm.bind(this);
    this.handleNewAnswer = this.handleNewAnswer.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestions();
    this.props.fetchResponses(this.props.currentProfile);
  }

  handleNewAnswer(){
    this.setState({
      questions: this.props.questions,
      responses: this.props.responses
    });
  }

  handleEdit(){
    this.setState({
      edit: true
    });
  }
  componentwillReceiveProps(newProps){
    if(this.props.responses !== newProps.responses){
      this.props.fetchQuestions();
      this.props.fetchResponses(this.props.currentProfile);
    }
  }

  answeredQuestions(){
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

    const answeredQuestions = this.answeredQuestions().map( (question, idx) => {
    const questionAnswers = this.props.questions[question.id].answers;
    const answerDisplay = questionAnswers.map(answer => {
      if(this.responseIds().includes(answer.id)){
        return <p key={answer.id}>{answer.body + " ✓"}</p>;
      } else {
        return <p key={answer.id}>{answer.body}</p>;
      }
    });
      if(this.props.currentUser.id === parseInt(this.props.currentProfile)){
          return(
            <div>
             <div key={question.id} className='individual-questions'>
              <p>{question.body}
                <button className='edit-button'
                        value={question.id}
                        onClick = {()=> this.handleEdit()}>
                  <img className='edit-icon'
                    src='https://www.materialui.co/materialIcons/editor/mode_edit_white_192x192.png'/>
                </button>
              </p>
              {answerDisplay}
            </div>
           </div>
          );
      } else {
        return(
          <div key={question.id} className='individual-questions'>
            <p>{question.body}
            </p>
            {answerDisplay}
          </div>
        );
      }

    });
    return(
      <div className='answered-display'>
        {answeredQuestions}
      </div>
    );
  }


  renderQuestionForm(){
    if(this.props.currentUser.id === parseInt(this.props.currentProfile)){
      return(
        <div>
          <div className='answer-questions-header'>
            <h3>Answer Questions:</h3>
          </div>
          <QuestionFormContainer/>
        </div>
      );
    }
  }

  render() {
    if(Object.keys(this.props.questions).length === 0 || Object.keys(this.props.responses).length === 0) {
      return(
        <div className='answered-questions'>
          {this.renderQuestionForm()}
          <h3>No Questions Answered</h3>
        </div>
      );
    } else {
        return(
          <div className='answered-questions'>
            {this.renderQuestionForm()}
            {this.answeredQuestionsDisplay()}
          </div>
        );
      }

    }

}

export default Questions;
