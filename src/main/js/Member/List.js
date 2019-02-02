import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="grid">
        {this.props.member.map(item=>{
            return(
                <div key={item.member_no}>
                    <div>{item.member_profile}</div>
                    <div>{item.member_name}</div>
                    <div>{item.member_phone}</div>
                    <div>{item.member_email}</div>
                </div>
            )
        })}
      </div>
    )
  }
}
