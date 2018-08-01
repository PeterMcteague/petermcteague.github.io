import React, {Component} from "react";
import ReactDOM from 'react-dom'
import NavBar from '../../Components/NavBar';
import HomeMain from '../../Components/Views/HomeMain';
import '../App.css';

export default class Home extends Component {
  componentDidMount() {
    ReactDOM.render(<HomeMain/>,document.getElementById("homeMain"));
    ReactDOM.render(<NavBar/>,document.getElementById("navbar"));
  }
  render() {
    return (
      <div id='main'>
        <div id='homeMain'></div>
      </div>
    );
  }
}