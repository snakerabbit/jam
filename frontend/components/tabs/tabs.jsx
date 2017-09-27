import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 0
    };
  }


  tabDisplay(){

  }

  render(){
    return(
      <div>
        <div className = 'profile-tab-container'>
          <h3>HELLO THIS IS WORKING</h3>
        </div>
      </div>
    );
  }
}

export default Tabs;
