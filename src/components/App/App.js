import React from 'react'
import Main from '../Main/Main'
import Profile from '../Profile/Profile'
import store from '../../store'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'

class App extends React.Component {
  render(){
    let s = store.getState()
    return (
      <Router>
        <div className="wrapper">
          <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/profile/jamie'><li>Profile</li></NavLink>
          </ul>
          
          <Route path="/" exact={true} component={Main}/>
          <Route path="/profile/:username" render={({match, ...rest})=>
            <Profile greeting={s.greeting} username={match.params.username}/>
          }>
          </Route>
        </div>
      </Router>
    )
  }
}

export default App