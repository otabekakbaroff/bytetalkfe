import React, { useEffect, useState } from 'react'
import axiosWithAuth from './axiosWIthAuth'

function People(){
    const [users,setUsers] = useState([])
    function s(){
        let counter = 0
        return function(){
          return ++counter
        }
      }
      let counter = s()
    useEffect(()=>{
        axiosWithAuth().get('http://localhost:5000/api/users').then(user=>{
            setUsers(user.data)
        })
    },[])
    return(
        <div className="discover">
            <h1>Discover New Connections</h1>
            {users.map(user=>(
                <div key={counter()} className="people-list">
                    <img className="discover-profile-pic" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"/>
                    <p>{user.firstname} {user.lastname}</p>
                </div>
            ))}
        </div>
    )
}



export default People
