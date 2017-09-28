import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTabIdx: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.tabArray = this.tabArray.bind(this);
  }

  handleClick(idx){
    this.setState({
      selectedTabIdx:idx
    });
  }

  tabArray(){
    return(
      this.props.tabLabels.map((tab, idx) =>{
        if(this.state.selectedTabIdx === idx){
          return(
            <li className='individual-tab' key={idx}
                onClick={()=> this.handleClick(idx)}>
              <p className='tab-text'>{tab}</p>
            </li>
          );
        } else {
          return(
            <li className='individual-tab'
              key={idx}
                onClick={() => this.handleClick(idx)}>
                <p className='tab-text'>{tab}</p>
            </li>
          );
        }
      }
    ));
  }

  render(){
    return(
      <div className='tabs-container'>
        <div className='tab-labels'>
          <ul className='tab-name'>
            {this.tabArray()}
          </ul>
        </div>
        <div className='tabs'>
            {this.props.tabs[this.state.selectedTabIdx]}
        </div>
      </div>
    );
  }
}

export default Tabs;
