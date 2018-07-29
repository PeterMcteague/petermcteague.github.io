import React, { Component } from 'react';
import './App.css';

class NiceSquareButton extends Component {

    constructor(props) {
        super(props);

        this.style = {
            color: 'white',
            border: '1px solid',
            width: '100px',
            height: '50px',
            cursor: 'pointer',
            textAlign: 'center',
            verticalAlign: 'middle',
            backgroundColor: 'transparent',
            display:'flex',
            justifyContent: 'center',
            alignItems:'center',
            lineHeight: '50px'
        };

        this.url = "";
        this.txt = ""

        if (props !== undefined)
        {
            if (props.url !== undefined)
            {
                this.url = props.url;
            }
            if (props.txt !== undefined)
            {
                this.txt = props.txt;
            }
        }
    }

    render() {
        return (
            <div id="learnMore">
                <a style={this.style} href={this.url}>{this.txt}</a>
            </div>
        );
    }
}

export default NiceSquareButton;