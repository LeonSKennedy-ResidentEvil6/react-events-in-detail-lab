import React, { Component } from "react";
// import ReactDOM from 'react-dom';

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)
        this.onReceiveCoordinates = props.onReceiveCoordinates
    }

    handleClickButton = (event) => {
        // console.log(event.clientX, event.clientY)
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.handleClickButton} />
        )
    }
}