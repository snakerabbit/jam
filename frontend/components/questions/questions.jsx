import React from 'react';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {}
    };
  }

  componentDidMount(){
    this.props.fetchQuestions();
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
