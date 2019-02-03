import React, { Component } from 'react'
import axios from 'axios'
import List from '../Member/List'

export default class User extends Component {
    state={
        member_origin:[],
        member:[],
        select:"0"
    }

    componentWillMount=async()=>{
        const req = await axios.get('api/memberDtoes')
        const res = await req.data
        this.setState({
            member:res._embedded.memberDtoes,
            member_origin:res._embedded.memberDtoes
        })
        console.log(this.state.member)
    }


    handleChange=async(e)=>{
        console.log(this.state.select)
        console.log(e.target.value)
        if(e.target.value == 'undefined' || e.target.value == []){
            this.setState({member:this.state.member_origin})
        }else{
            const req = await axios({
                method:'GET',
                url:`/api/memberDtoes/${e.target.value}?select=${this.state.select}`
            })
            const res = await req.data
            this.setState({
                member:res
            })
            console.log(this.state.member)
        }
    }

    selectChange=(e)=>{
        this.setState({
            select:e.target.value
        })
        console.log(this.state.select)
    }

    handleShow=async()=>{
        const req = await axios.get(`api/memberDtoes?sort=${sort}`)
        const res = await req.data
        this.setState({
            member:res._embedded.memberDtoes,
            member_origin:res._embedded.memberDtoes
        })
    }

  render() {
    return (
      <div>  
        <select value={this.state.select} onChange={this.selectChange}>
            <option value="0">전체</option>
            <option value="1">이름</option>
            <option value="2">클래스</option>
            <option value="3">전화번호</option>    
        </select>   
        검색 : <input type="text" onChange={this.handleChange}/>
        <List member={this.state.member}/>
      </div>
    )
  }
}
