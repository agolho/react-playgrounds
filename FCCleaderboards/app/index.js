import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import TableList from "./Components/Tablelist";

class HelloWorld extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recentTop: [],
      allTop: [],
      current: "recentTop"
    }
  }
  componentWillMount(){
    axios.all([this.getRecentTop(), this.getAllTop()])
      .then(axios.spread((recentTop, allTop) => {
        this.setState({recentTop:recentTop.data,allTop:allTop.data})
      }));

  }
  getRecentTop(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
  getAllTop(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }
  changeState(current){
    this.setState({current});
  }
  render(){
    return (
      <div>
      <div>
      <button onClick={() => this.changeState('recentTop')} className="btn btn-block btn-lg btn-info">Recent</button>
      </div><div>
      <button onClick={() => this.changeState('allTop')} className="btn btn-block btn-lg btn-success">All Time</button>
      </div>
      <TableList data={this.state[this.state.current]}/>
      </div>
    );
  }
}
ReactDOM.render(<HelloWorld />,document.getElementById("app"));
