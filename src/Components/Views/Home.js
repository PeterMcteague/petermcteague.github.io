import React, {Component} from "react";
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import NavBar from '../../Components/NavBar'
import ImageCircle from '../../Components/ImageCircle'
import SqButton from '../../Components/NiceSquareButton'
import '../App.css';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
    ReactDOM.render(<ImageCircle srcvar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" width='20vh' height='20vh'/>, document.getElementById("imagecircle"));
    ReactDOM.render(<NavBar/>,document.getElementById("navbar"));
    ReactDOM.render(<SqButton url='./about' txt='About'/>,document.getElementById("aboutButton"));
  }
  render() {
    return (
      <div id="homeBanner" class="homeBanner">
        <div id="imagecircle" class="imagecircle"></div>
        <div class="homeTitle">
            <h2><b>Peter McTeague</b></h2>
            <h3><i>Software Developer</i></h3>
        </div>
        <div class="centerAboutBox">
            <h4>I'm a graduate Computer Scientist situated in Weymouth, England.<br /> I specialize in websites and web applications. Details of my skills and work can be found on my <a href="http://www.linkedin.com/in/peter-mcteague">LinkedIn</a> and <a href="https://github.com/PeterMcteague?tab=repositories">GitHub</a>.</h4>
            <br />
            <div class="buttonsHome">
                <div id="aboutButton" class="buttonsHomeInner"></div>
                <div class="mailHome buttonsHomeInner">
                    <a href="mailto:petermcteaguedev@gmail.com">
                        <i class="fa fa-envelope-square"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}