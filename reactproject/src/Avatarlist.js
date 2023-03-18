import React, { Component } from "react";
//import logo from "./image.png";
class Avatarlist extends Component{
    render(){
    return(
           <div className="avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4 tc">
                   <img src={`https://ui-avatars.com/api/${this.props.name}`} alt="Avatar"/>
                   <h1 className="tc "> {this.props.name} </h1>
                   <p className="tc"> {this.props.work} </p>
                   </div>
          )
    }
}
export default Avatarlist;