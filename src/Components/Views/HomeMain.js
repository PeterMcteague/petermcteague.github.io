import React, {Component} from "react";
import ReactDOM from 'react-dom'
import ImageCircle from '../../Components/ImageCircle'
import SqButton from '../../Components/NiceSquareButton'
import '../App.css';

export default class HomeMain extends Component{
    componentDidMount() {
        ReactDOM.render(<ImageCircle srcvar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" width='20vh' height='20vh'/>, document.getElementById("imagecircle"));
        ReactDOM.render(<SqButton url='./About' txt='About'/>,document.getElementById("aboutButton"));
    }
    render(){
        return(
            <div id="homeBanner" className="homeBanner">
                <div id="imagecircle" className="imagecircle"></div>
                <div className="homeTitle">
                    <h2><b>Peter McTeague</b></h2>
                    <h3><i>Software Developer</i></h3>
                </div>
                <div className="centerAboutBox">
                    <h4>I'm a graduate Computer Scientist situated in Weymouth, England.<br /> I specialize in websites and web applications. Details of my skills and work can be found on my <a href="http://www.linkedin.com/in/peter-mcteague">LinkedIn</a> and <a href="https://github.com/PeterMcteague?tab=repositories">GitHub</a>.</h4>
                    <br />
                    <div className="buttonsHome">
                        <div id="aboutButton" className="buttonsHomeInner"></div>
                        <div className="mailHome buttonsHomeInner">
                            <a href="mailto:petermcteaguedev@gmail.com">
                                <i className="fa fa-envelope-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}