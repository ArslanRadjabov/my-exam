import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'

export default class LikeCounter extends Component {

    constructor(props){
        super(props)
    
        this.state={count: 0}
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({count: this.state.count+1})
    }
  
  
render() {
    return (
        <button  className='btnComment' onClick={this.handleClick}><FontAwesomeIcon icon={faThumbsUp}/>{this.state.count}</button>
    )
  }
}
