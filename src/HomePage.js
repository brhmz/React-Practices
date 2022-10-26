import React, { Component } from 'react'
import Profile from './Profile'
import axios from 'axios'

export default class HomePage extends Component {
    constructor(){
        super()
        this.state = {
            title: 'My Quotes',
            url_one: 'https://images.unsplash.com/photo-1541876788-2221e585da7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            url_two: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&xid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            quote_one: '',
            quote_two: ''
        }
    }

    changeTitle = () => {
        this.setState({
            title: 'Quotes'
        })
    }


    componentDidMount(){
        axios.get('https://quote-garden.herokuapp.com/api/v3/quotes')
        .then(response => {
            console.log(response.data.data[0])
            this.setState({
                quote_one: response.data.data[0].quoteText,
                quote_two: response.data.data[1].quoteText
            })
        })
        .catch(err => console.log(err))
    }



  render() {
    return (
      <div className='homepage-container'>
        <h1>{this.state.title}</h1>
        
        <Profile url = {this.state.url_one} title = {this.state.title} changeTitle = {this.changeTitle} quote = {this.state.quote_one}/> 

        <Profile url = {this.state.url_two} title = {this.state.title} changeTitle = {this.changeTitle} quote = {this.state.quote_two}/>  

      </div>
    )
  }
}
