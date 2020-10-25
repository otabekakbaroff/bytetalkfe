import React,{useState} from 'react'
import axiosWithAuth from './axiosWIthAuth'

function SignUp(props){
    const [userInput,setUserInput]=useState({
        firstname:"",
        lastname:"",
        username:"",
        password:""
    })
    function inputHandler(e){
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value
        })
    }
    function submit(e){
        e.preventDefault()
        axiosWithAuth().post('/api/auth/users/register', userInput).then((value)=>{
            localStorage.setItem('token',value.data.token)
            props.history.push("/profile/messages");
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Sign Up</h1>
            <form>
                <input onChange={inputHandler} name="firstname" placeholder="First name"/>
                <input onChange={inputHandler} name="lastname" placeholder="Last name"/>
                <input onChange={inputHandler} name="username" placeholder="Enter phone or email"/>
                <input onChange={inputHandler} type="password" name="password" placeholder="Enter Password"/>
                <button type="submit" onClick={submit} >Sign Up</button>
            </form>
        </div>
    )
}



export default SignUp
