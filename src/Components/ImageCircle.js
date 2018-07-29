import React, { Component } from 'react';
import './App.css';

class ImageCircle extends Component {

    constructor(props) {
        super(props);

        this.style = {
            height: '100px',
            width: '100px',
            borderRadius: '50%',
            backgroundColor: "#00B1E1",
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        };

        this.altTxt = "";
        this.srcUrl = "https://placehold.it/1000x1000";

        if (props !== undefined)
        {
            if (props.height !== undefined)
            {
                this.style.height = props.height;
            }
            if (props.width !== undefined)
            {
                this.style.width = props.width;
            }
            if (props.borderRadius !== undefined)
            {
                this.style.borderRadius = props.borderRadius;
            }
            if (props.backgroundColor !== undefined)
            {
                this.style.backgroundColor = props.backgroundColor;
            }
            if (props.alt !== undefined)
            {
                this.altTxt = props.alt;
            }
            if (props.srcvar !== undefined)
            {
                this.srcUrl = props.srcvar;
            }
        }
    }

    render() {
        return (
            <img style={this.style} src={this.srcUrl} alt={this.altTxt}/>
        );
    }
}

export default ImageCircle;