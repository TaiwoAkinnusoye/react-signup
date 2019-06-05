import React, {Component} from 'react';
import Input from './Input';

class Modal extends Component {
    render() {
        return (
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="ModalForm" >
                    <Input id="name" type="text" placeholder="Arya Stark" />
                    <Input id="username" type="email" placeholder="arya.stark@winterfell.com" />
                    <Input id="password" type="password" placeholder="A Girl Is No One" />
                    <button>Log In</button>
                </form>
            </div>
        );
    }
};

export default Modal;