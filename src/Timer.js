import React,{Component} from 'react';
export default class Timer extends Component {

  constructor(props){
    super(props);

    this.state = {
      clock:0
    };
    this.ticker = this.ticker.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(this.ticker,1000);
  }
  ticker() {
    this.setState({clock:new Date()-this.props.start})
  }
  render(){
    var clock = Math.round(this.state.clock/1000);
    return(
      <div>
        <p>you are here since</p><br/>
        <span>{clock}</span>
        <p>secs</p>
        <p>{this.props.start}</p>
      </div>
    );
  }
}
