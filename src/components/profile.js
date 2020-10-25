import React from 'react'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Messages from './messages/messages';
import People from './discover';
function Profile(){
    return(
        <div>
            <img className="profile-pic" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"/>
        <Router>
            <div>
                <Link to="/profile/messages">Messages</Link>
                <Link to="/profile/people">People</Link>
            </div>
            <Switch>
                <Route  path="/profile/messages" component={Messages}/>
                <Route  path="/profile/people" component={People}/>
            </Switch>
        </Router>
        </div>
    )
}



export default Profile
