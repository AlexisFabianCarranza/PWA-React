import React, {Component} from 'react';
import MyAppBar from './MyAppBar';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.goHome = this.goHome.bind(this);
        this.logout = this.logout.bind(this);
    }
    goHome(){
    }
    logout(){
        //Proceso de deslogeo
    }
    render(){
        return <MyAppBar />
    }
} 

export default Navigation;