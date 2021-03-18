import React, { Component } from "react";
// import ReactDOM from 'react-dom';

export default class DelayedButton extends Component {
    
    handleClick = (event) => {
        event.persist();
        setTimeout(() => {
         this.props.onDelayedClick(event)
        }, this.props.delay)
    }
 
    render() {
        return (
            <div>
                <button onClick={this.handleClick} />
            </div>
    
        )
    }
}
