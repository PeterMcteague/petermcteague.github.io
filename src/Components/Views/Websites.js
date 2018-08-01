import React, { Component } from "react";
import '../App.css';
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import NavBar from '../../Components/NavBar';
import ImageCircle from '../../Components/ImageCircle'
import thissitepng from '../../Resources/thissite-edit.png'
import rosssitepng from '../../Resources/ross-edit.png'
import emrsitepng from '../../Resources/emr-edit.png'
import responsiveMock from '../../Resources/responsive.png'

export default class Websites extends Component {
  componentDidMount() {
    ReactDOM.render(<NavBar/>,document.getElementById("navbar"));
    ReactDOM.render(<ImageCircle srcvar={thissitepng} width='20vh' height='20vh'/>, document.getElementById("thisSite"));
    ReactDOM.render(<ImageCircle srcvar={rosssitepng} width='20vh' height='20vh'/>, document.getElementById("rossSite"));
    ReactDOM.render(<ImageCircle srcvar={emrsitepng} width='20vh' height='20vh'/>, document.getElementById("emrApp"));
    browserHistory.push('/Websites');
  }
  render() {
    return (
      <div id="homeBanner" className="homeBanner">
        <div className="centerAboutBox-Big">
          <div className="scrollBox">
            <div style={{marginRight: '10%'}}>
              <h4 className='aboutTitle'>Why do you need a website?</h4>
              <p>As a business, a website allows you to show your business to the world. Nowadays many people search for businesses
                near them via Google Maps and then look to a website for details. If you don't have a website then many consumers simply wont consider your business as they don't have a way of getting more information.</p>
              <p>Therefore it's a good idea for small businesses to get a website made. Larger businesses can also use a web app to manage their business on top of what a website offers.</p>
              <h4 className='aboutTitle'>What's the difference between a website and a web app?</h4>
              <p>A website is a set of pages that display set information to users. A web app can manipulate information stored on a server, such as a breakfast menu, allowing a page to exist where the menu can be edited and that updated information can be displayed to users of the site instantly!</p>
              <h4 className='aboutTitle'>My creations</h4>
              <div className='webShow'>
                <tr><div id='thisSite'></div><div id='rossSite'></div><div id='emrApp'></div></tr>
                <tr><th><br/>This site</th><th><br/>A site made for a musician</th><th><br/>A web app made to manage healthcare records</th></tr>
              </div>
              <hr/>
                <p style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', width: '100%'}}>Among many others, some of which have been done for other clients.</p>
              <h4 className='aboutTitle'>Device compatibility</h4>
              <p>All sites and applications I make are 'responsive' meaning that the one site looks and functions great across computers, tablets and mobiles!</p>
              <img alt='This site shown on multiple devices' src={responsiveMock} style={{width: '50vw', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}></img>
              <br/><br/>
              <p>If you need a website or web app for your business created, modified or updated, <a href='mailto:petermcteaguedev@gmail.com'>get in touch!</a> I may be able to help you out!</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}