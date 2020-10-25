import React,{useState} from 'react'
import axiosWithAuth from './axiosWIthAuth'

function Login(props){
    const [userInput,setUserInput]=useState({
        username:"",
        password:""
    })
    function InputHandler(e){
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value
        })
    }
    function submit(e){
        e.preventDefault()
        console.log(userInput)
        axiosWithAuth().post('/api/auth/users/login', userInput).then((value)=>{
            localStorage.setItem('token',value.data.token)
            props.history.push("/profile/messages");
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Login</h1>
            <form className="login">
                <input onChange={InputHandler} name="username" placeholder="Enter phone or email"/>
                <input onChange={InputHandler} name="password" placeholder="Enter Password"/>
                <button type="submit" onClick={submit}>Login</button>
            </form>
        </div>
    )
}



export default Login

