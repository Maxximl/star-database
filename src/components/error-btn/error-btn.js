import React, { Component } from 'react';

export default class ErrorButton extends Component {

    state = {
        renderError: false
    }


    render() {

        if (this.state.renderError) {
            this.foo.barr = 0;
        }
        return (
            <button className="btn btn-danger"
                onClick={() => this.setState({ renderError: true })}>
                Throw Error
        </button>
        );

    }
}