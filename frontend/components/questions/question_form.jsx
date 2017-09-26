import React from 'react';

class QuestionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answerId: null,
      acceptedAnswers: [],
      importance: 0,
      explanation: ""
    };

    this.renderQuestionForm = this.renderQuestionForm.bind(this);
  }

  renderQuestionForm() {
    
  }

  render(){
    if(Object.keys(this.props.questions).length !== 0) {
      return(
        <div>
          {this.renderQuestionForm()}
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }

  }


}
