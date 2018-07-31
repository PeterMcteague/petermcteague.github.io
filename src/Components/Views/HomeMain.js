import React, {Component} from "react";
import ReactDOM from 'react-dom'
import ImageCircle from '../../Components/ImageCircle'
import SqButton from '../../Components/NiceSquareButton'
import '../App.css';
import { css } from 'emotion';

const writing = css({
    textAlign: 'center',
    width: 'fit-content',
    alignContent: 'center',
    margin: '0 auto',

    h3: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        margin: '0.5em auto',
        borderRight: '0.04em solid white',
        animation: 'typing 1s steps(18, end), blink-caret 1s step-end infinite',
        fontSize: '1em',
        fontWeight: 'normal',
        letterSpacing: '0.07em',
        lineheight: '0',
        fontFamily: 'open sans,sans-serif',
        fontWeight: '700',
        lineHeight: '1.25',
        marginTop: '1em',
        marginBottom: '.5em',
        display: 'block',
        fontSize: '1.17em',
        marginTop: '1em',
        marginBottom: '1em',
        marginLeft: '0',
        marginRight: '0',
        fontWeight: 'bold',
        width: ''
    },

    '@keyframes typing': {
    'from': { width: '0' },
    'to': { width: '100%' }
    },

    '@keyframes blink-caret': {
    'from, to': { borderColor: 'transparent' },
    '50%': { borderColor: 'white' }
    }
  });

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
                    <div className={writing}>
                        <h3><i>Software Developer</i></h3>
                    </div>
                </div>
                <div className="centerAboutBox">
                    <h4>I'm a graduate Computer Scientist situated in Weymouth, England.<br/><br/> I specialize in websites and web applications.<br/><br/> Details of my skills and work can be found on my <a href="http://www.linkedin.com/in/peter-mcteague">LinkedIn</a> and <a href="https://github.com/PeterMcteague?tab=repositories">GitHub</a>.</h4>
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