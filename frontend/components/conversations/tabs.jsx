import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTabIdx: 0
    };
  }

  tabArray(){
    this.props.tabLabels.map((tab, idx) =>{
      if(this.state.selectedTabIdx === idx){
        return(
          <li key={idx}
              onClick={()=> this.handleClick(idx)}>
            {tab}
          </li>
        );
      } else {
        return(
          <li key={idx}
              onClick={() => this.handleClick(idx)}>
              <p>{tab}</p>
          </li>
        );
      }
    });
  }

  render(){
    return(
      <div>
        <div>
          <ul>
            {this.tabArray()}
          </ul>
        </div>
        <div>
            {this.props.tabs[this.state.selectedTabIdx]}
        </div>
      </div>
    );
  }
}

export default Tabs;
