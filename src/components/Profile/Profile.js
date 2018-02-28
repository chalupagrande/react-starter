import React from 'react'
import PropTypes from 'prop-types'
import store from '../../store'
import './Profile.css'

class Profile extends React.Component {
  componentWillReceiveProps(){
    console.log(this.props)
  }
  submit(e){
    e.preventDefault()
    console.log('submitting')
    store.dispatch({
      type: 'CHANGE_GREETING',
      greeting: e.target.querySelector('input[type=text]').value
    })
  }
  render(){
    return(
      <div className="profile">
        <h1>Welcome {this.props.username}!</h1> 
        <p>This is your greeting: {this.props.greeting}</p>
        <form onSubmit={this.submit}>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

Profile.propTypes = {
  greeting: PropTypes.string
}

export default Profile