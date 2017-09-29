import React from 'react';
import UserIndexItem from './user_index_item';
import IndexSearchBar from './index_search_bar';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument:"",
      userResponses:{},
      currentUserResponses:{}
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.instrumentOptions = this.instrumentOptions.bind(this);
    this.mapUsers = this.mapUsers.bind(this);
    this.findQuestionMatch = this.findQuestionMatch.bind(this);
    this.findQuestionImportance = this.findQuestionImportance.bind(this);
    this.findMatchPercentage = this.findMatchPercentage.bind(this);
    this.findQuestionTally = this.findQuestionTally.bind(this);
  }

  componentDidMount(){
      this.props.fetchAllUsers();
      this.props.fetchQuestions();
  }

  handleFilter (e) {
    e.preventDefault();
    if(e.target.value === 'all'){
      this.props.fetchAllUsers();
    } else {
      this.props.fetchUsers(e.target.value);
      this.setState({ instrument: e.target.value });
    }

  }


  instrumentOptions () {
    return(
      <div className = 'search-bar'>
        <select defaultValue='Instrument' onChange={this.handleFilter}>
          <option selected disabled>Instrument</option>
          <option value='guitar'>Guitarist</option>
          <option value='bass guitar'>Bass Guitarist</option>
          <option value='drums'>Drummer</option>
          <option value='piano'>Keyboardist</option>
          <option value='voice'>Vocalist</option>
          <option selected value='all'>All Musicians</option>
        </select>
    </div>
    );
  }

  mapUsers () {
    const mappedUsers = this.props.users.map(user => (
      <div key={user.id} className='user-index-item'>
        <UserIndexItem
          user={user} match={this.findMatchPercentage(user)}/>
        <br/>
        <br/>

      </div>
    ));
    if (mappedUsers.length === 0 ){
      return (
        <div>
          <p>NO USERS FOUND</p>
        </div>
      );
    } else {
      return(
        mappedUsers
      );
    }
  }

  // findSharedAnswersCount(userId){
  //   const userResponses = this.props.users[userId].responses;
  //   const currentUserResponses = this.props.users[userId].responses;
    // const userAnswers = this.state.userResponses.map(response =>{
    //   return response.answer_id;
    // });
    // const currentUserAnswers = currentUserResponses.map(response =>{
    //   return response.answer_id;
    // });
    //
    // let sharedAnswers = 0;
    //
    // userAnswers.forEach(answerId => {
    //   if(currentUserAnswers.includes(answerId)){
    //     sharedAnswers += 1;
    //   }
    // });
    // return sharedAnswers;
  // }

  findQuestionMatch(question, currentUser, user){
    let userAnswer = null;
    let currentUserAcceptables = null;
    let currentUserImportance = 0;

    const answers = question.answers;
    const answerIds = answers.map(answer => answer.id);
    this.props.fetchResponses(user.id);
    this.props.fetchResponses(currentUser.id);

    answers.forEach(answer => {
      user.responses.forEach(response =>{
        if(response.answer_id === answer.id){
          userAnswer = answer.body;
        }
      });
    });

    currentUser.responses.forEach(response => {
      if(answerIds.includes(response.answer_id)){
        currentUserAcceptables = response.accepted_answers;
        currentUserImportance = response.importance;
      }
    });

    if(currentUserAcceptables.includes(userAnswer)){
      return currentUserImportance;
    } else {
      return 0;
    }

  }

  findQuestionImportance(question, user) {
    let questionImportance = 0;
    const answers = question.answers.map((answer) => answer.id);

    user.responses.forEach((response) => {
      if (answers.includes(response.answer_id)) {
        questionImportance = response.importance;
      }
    });

    return questionImportance;
  }

  findQuestionTally(question, currentUser, user) {
  let userAnswer = null;
  let userAcceptables = null;
  let userImportance = 0;

  const answers = question.answers;
  const answerIds = question.answers.map((answer) => answer.id);

  answers.forEach((answer) => {
    user.responses.forEach((response) => {
      if (response.answer_id === answer.id) {
        userAnswer = answer.body;
      }
    });
  });

  user.responses.forEach((response) => {
    if (answerIds.includes(response.answer_id)) {
      userAcceptables = response.accepted_answers;
      userImportance = response.importance;
    }
  });

  if (userAcceptables.includes(userAnswer)) {
    return userImportance;
  } else {
    return 0;
  }

}

  findMatchPercentage(user){
    let currentUserScore = 0;
    let userScore = 0;
    let currentUserQuestionScore = 0;
    let userQuestionScore = 0;

    const currentUserQuestions = this.props.currentUser.questions.map(question =>{
      return question.question_id;
    });
    const userQuestions = user.questions.map(question =>{
      return question.question_id;
    });
    const bothQuestions = Object.keys(this.props.questions).map(question =>{
      if(currentUserQuestions.includes(parseInt(question)) && userQuestions.includes(parseInt(question))){
        return this.props.questions[parseInt(question)];
      }
    }).filter(question => question!== undefined);
      if(bothQuestions.length === 0){
        return 0;
      }

      bothQuestions.forEach(question =>{
        currentUserScore += this.findQuestionTally(question, this.props.currentUser, user);
        userScore += this.findQuestionTally(question, user, this.props.currentUser);
        currentUserQuestionScore += this.findQuestionImportance(question, this.props.currentUser);
        userQuestionScore += this.findQuestionImportance(question, user);
      });


      const currentUserMatchValue = (currentUserScore/bothQuestions.length);
      const userMatchValue = (userScore/userQuestionScore);
      const numQuestions = bothQuestions.length;

      const combinedMatchValue = Math.sqrt(currentUserMatchValue * userMatchValue)-(1/(2*numQuestions));
      let matchPercentage = Math.floor(combinedMatchValue * 100);
      if (matchPercentage < 0){
        matchPercentage = matchPercentage*-1;
      }
      if (matchPercentage > 100){
        matchPercentage = 100;
      }
      return matchPercentage;


  }

  render () {
    return(
      <div className='browse-users'>
          <div className='index-search-bar'>
            <div className='index-search-container'>
              <h3>Search Users By: </h3>
              {this.instrumentOptions()}
            </div>
          </div>
          <div className = 'user-index'>
          <ul>
            {this.mapUsers()};
          </ul>
        </div>
      </div>
    );
  }
}

export default UserIndex;
