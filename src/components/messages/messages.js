import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../axiosWIthAuth'

function Messages(){
    useEffect(()=>{
        axiosWithAuth().get('')
    },[])
    const [messages,setMessages]=useState([1])
    const [people,setPeople] = useState([0])
    return(
        <div>
            <h1>Chat Box</h1>
            <div className="chat-ui">
                <div className="people">{people.map((item)=>(
                   <div>
                       <h1>Hello</h1>
                   </div>
                ))}</div>
                <div className="message">{messages.map((item)=>(
                    <div>
                        <h1>Hello</h1>
                    </div>
                ))}</div>
            </div>
        </div>
    )
}



export default Messages
