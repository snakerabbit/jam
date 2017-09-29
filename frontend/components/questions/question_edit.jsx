import React from 'react';
class QuestionEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="new-question">
        <p>{this.props.response.question.body}</p>
        <form className="answers-form">
          
        </form>
      </div>
    );
  }

}

export default QuestionEdit;
