import React, { Component } from 'react'

export default class Profile extends Component {

    constructor(props) {
        super (props)
        this.state = {
            myTitle: this.props.title
        }
    }

    changeMyTitle = () => {
        this.setState ({
            myTitle: 'Quotes'
        })
    }

  render() {
    return (
      <div className='profile-container'>
        <h1>{this.state.myTitle}</h1>
        <img src = {this.props.url}/>
        <p>{this.props.quote}</p>
         <button onClick={this.props.changeTitle}>Change Parent's Title</button>
         <button onClick={this.changeMyTitle}>Change My Title</button>
      </div>
    )
  }
}
