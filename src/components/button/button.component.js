import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
    super(props) {

    }
    
    render() {
        return (
            <button data-testid="button" className="button-style">{this.props.label}</button>
        )
    }
}