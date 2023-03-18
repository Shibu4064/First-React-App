import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './demo.css';

class Demo extends Component{
        render(){
            return <div className="maindiv_style">
                   <h1>Hello {this.props.name}</h1>
                   <p>Welcome to my first react javascript app</p>
                   </div>        
        }
}

export default Demo