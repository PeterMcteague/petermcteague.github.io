import React, {Component} from "react";
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import NavBar from '../../Components/NavBar';
import About from '../../Components/Views/About';
import HomeMain from '../../Components/Views/HomeMain';
import '../App.css';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
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