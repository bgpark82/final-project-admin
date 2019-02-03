import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div className="grid">
        {console.log(this.props.member)}
        {this.props.member.map(item=>{
            return(
                <div key={item.member_no}>
                    <div>{item.member_profile}</div>
                    <div>{item.memberName}</div>
                    <div>{item.memberClass}</div>
                    <div>{item.memberPhone}</div>
                    <div>{item.member_email}</div>
                </div>
            )
        })}
      </div>
    )
  }
}
