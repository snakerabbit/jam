import React from 'react';
import { Link } from 'react-router-dom';
import AboutMeContainer from './aboutme_container';
import UserBasicsContainer from './user_basics_container';
import QuestionFormContainer from '../questions/questions_container';
import TabsContainer from '../conversations/tabs_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderTab = this.renderTab.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  handleClick(e){
    e.preventDefault();
    if (e.target.value === "aboutme"){
      this.setState({
        selectedTab: 0
      });
    } else {
      this.setState({
        selectedTab: 1
      });
    }
  }

  renderTab(){
    if(this.state.selectedTab === 0){
      return(
        <AboutMeContainer/>
      );
    } else {
      return(
        <QuestionFormContainer/>
      );
    }
  }

  render () {
    const user = this.props.user;

    return(
      <div>
        <UserBasicsContainer/>
        <div>
          <TabsContainer
            tabs={[<AboutMeContainer/>, <QuestionFormContainer/>]}
            tabLabels={["About Me", "Questions"]}/>
        </div>
      </div>

    );
  }
}

Profile.defaultProps = {
  user: {
    username: "",
    image_url: "",
    instrument: "",
    city: "",
    looking_for: "",
    about_me: "",
    fave_bands:"",
    fave_genres:"",
    purpose:""
  }
};

export default Profile;
