import React, {Component} from "react";
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import NavBar from '../../Components/NavBar';
import ImageCircle from '../../Components/ImageCircle';
import '../App.css';

export default class About extends Component {
  componentDidMount() {
    ReactDOM.render(<NavBar/>,document.getElementById("navbar"));
    browserHistory.push('/About');
  }
  render() {
    return (
      <div id="homeBanner" className="homeBanner">
        <div className="centerAboutBox-Big">
          <div className="scrollBox">
            <div style={{marginRight: '10%'}}>
              <h4 className='aboutTitle'>Background</h4>
                <p>Whilst studying at <a href='http://www.tees.ac.uk'>Teesside University</a> I attended a lot of lectures to introduce knowledge in a lot of software develop topics such as Java, Web Applications, Microservices and more. Following these I was assessed by developing something utilizing what I'd learnt, either solo or as part of a team. Many of the outcomes of these can be found on my GitHub.</p>
                <p>In my final year I worked with a client to develop a web application for them as the sole developer and requirements analyst. <br/>From my time at university I have obtained an array of technical and teamwork related skills that can be put into practice to develop software solutions for a organisation, an individual or for myself.</p>

              <h4 className='aboutTitle'>Skills</h4>
                <p>I will try to keep this up to date however I recommend checking my <a href='https://www.linkedin.com/in/peter-mcteague/'>LinkedIn profile's 'Skills' section</a> for a full list.</p>
                <li>Agile Methodology</li>
                <li>Object Orientation</li>
                <li>Systems Design</li>
                <li>Data Structures</li>
                <li>Microservices</li>
                <br/>
                <li>Python</li>
                <li>Java</li>
                <li>AS3</li>
                <li>C#</li>
                <li>Ada</li>
                <li>C</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Clojure/Lisp</li>
                <li>SQL</li>
                <br/>
                <li>Android Applications</li>
                <li>Games scripting</li>
                <li>Web Backend development</li>
                <li>Web Frontend development</li>
                <li>Web Services</li>
                <li>Web Applications</li>
                <li>Desktop software development</li>
                <li>Embedded systems development</li>
              </div>
            </div>
        </div>
      </div>
    );
  }
}