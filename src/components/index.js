import React from 'react'
import Login from './login/index'
import Register from './register/index'
export default class Main extends React.Component{
    constructor(props){
        super(props)
    }
    onLoginPress(){
        let register = document.querySelector('.register').style
        register.display = 'none'
        let login =  document.querySelector('.login').style
        login.display = 'block'
    }
    onRegisterPress(){
        let register = document.querySelector('.register').style
        register.display = 'block'
        let login =  document.querySelector('.login').style
        login.display = 'none'
    }
    render(){
        return(
            <div>
                <div className = 'divbtn'>
                <button onClick = {this.onLoginPress} className = 'loginbtn'> 
                Mark(0-100)</button>
                <button onClick = {this.onRegisterPress} className = 'loginbtn' > Grade(A-F)</button>
                </div>
                <div className = 'header' >Gpa Calculator</div>
                <div className = 'login'>
                    <Login/>
                </div>
                <div className = 'register'>
                    <Register/>
                </div>
                
            </div>
        )
    }

}

