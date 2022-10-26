import React, { Component } from 'react'

export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            username: 'ibrahim oz',
            image_url: 'https://images.unsplash.com/photo-1541876788-2221e585da7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
        }
    }
changeUser = () => {
    this.setState({
        username: 'rumeysa oz',
        image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    })
}

  render() {
    return (
      <div className='header-container'>
        <div className='header-profile'>
        <p>{this.state.username}</p>
        <img className='profile-img' src = {this.state.image_url}/>

        </div>
            <button className='button' onClick={this.changeUser}>Change User</button>
      </div>
    )
  }
}
