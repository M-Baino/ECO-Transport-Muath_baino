import React, { Component } from 'react'

export default class Logout extends Component {
  
    UNSAFE_componentWillMount(){
        localStorage.setItem("user_id" , null)
        localStorage.setItem('isAdmin', null)
        localStorage.removeItem('isAdmin')
        this.props.history.push("Home")
    }

    render() {
        return (
            <div>
                Logout
            </div>
        )
    }
}
