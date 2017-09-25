import React from 'react';
import QuestionsContainer from './questions_container';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions:{},
      userAnswers: {}
    };
    this.answeredQuestions = this.answeredQuestions.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestions();
    this.setState({questions: this.props.questions});
    console.log(this.state);
  }

  answeredQuestions(){
  }

  render (){
    return(
      <div>
        <h3>THIS COMPONENT IS WORKING</h3>
      </div>
    );
  }
}

export default Questions;
