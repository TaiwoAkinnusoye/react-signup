import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './Modal';
import "./App.css";


class App extends Component {

    state = {
        mounted: false
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    handleSubmit = (e) => {
        this.setState({
            mounted: false
        });
        e.preventDefault();
    }

    render () {
        let child;
        if (this.state.mounted) {
            child = <Modal onSubmit={this.handleSubmit} />
        }
        return (
            <div className="App">
                <ReactCSSTransitionGroup transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
                    {child}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
};

export default hot(module)(App);