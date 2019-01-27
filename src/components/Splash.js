import React, { Component } from 'react';

export default class Splash extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewprofile : false,
        }
    }

    clickEnter = (e) => {
        if(e && this.viewprofile === false){
            this.setState(this.viewprofile = true)
        }
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}