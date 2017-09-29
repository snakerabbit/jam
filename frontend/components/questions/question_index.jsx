import React from 'react';
import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from './question_form_container';
import Modal from 'react-modal';

class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
    this.state={
      edit: false,
      modalIsOpen: false,

    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  afterOpenModal(){

  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  componentDidMount(){
    this.props.fetchResponses(this.props.currentProfile);
  }

  render(){
    return(
      <ul>
        {this.props.responses.map(response => {

          return (
            <div>
              <button>Edit</button>
              <QuestionIndexItem response={response}/>;
            </div>
          );
        })}
      </ul>
    );
  }
}
