import React, { Component } from 'react'
import axios from 'axios'
import List from '../Member/List'

export default class User extends Component {
    state={
        member:[]
    }

    componentWillMount=async()=>{
        const req = await axios.get('api/memberDtoes')
        const res = req.data
        this.setState({
            member:res._embedded.memberDtoes
        })
        console.log(res)
        console.log(this.state.member)
    }

    handleChange=async(e)=>{
        console.log(e.target.value)
        const req = await axios.get(`api/memberDtoes/${e.target.value}`)
        const res = await req.data
        console.log(res)
        this.setState({
            member:res
        },)
    }

    handleState=()=>{
        return(
            <List member={this.state.member}/>
        )
    }

  render() {
    return (
      <div>  
        검색 : <input type="text" onChange={this.handleChange}/>
        
      
      </div>
    )
  }
}
