import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component{
        constructor(){
                super();
                this.state={
                        name:"Welcome to Avatar World"
                }
        }
        namechange(){
                this.setState({
                        name:"This is Hrithik's First React App"
                })
        }
        render(){

                const avatarlistarray=[
                        {
                                id:1,
                                name:"HRITHIK",
                                work:"Web Developer"      
                        },
                        {
                                id:2,
                                name:"KHONA",
                                work:"Graphics Designer"      
                         },
                        {
                                id:3,
                                name:"SUMAN",
                                work:"Executive Manager"      
                        },
                        {
                                id:4,
                                name:"NABIN",
                                work:"Professor"      
                        }
                  ]
                const arrayavatarcard = avatarlistarray.map( (avatarcard,i)=>{
                      return <Avatarlist key={i} id={avatarlistarray[i].name} 
                                     name={avatarlistarray[i].name} 
                                     work={avatarlistarray[i].work}/>
                  } )
                 return(<div className="mainpage">
                        <h1> {this.state.name} </h1>                 
                           {arrayavatarcard}
                 <button onClick={ () => this.namechange() }> Subscribe </button>
                 </div>
                  )   
        }
}
export default Avatar;