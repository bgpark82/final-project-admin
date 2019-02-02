import React from 'react'
import {NavLink} from 'react-router-dom'

export default function List() {
  return (
    <div>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/user">학생</NavLink>
      <NavLink to="/kh">KH</NavLink>
      <NavLink to="/client">제휴업체</NavLink>
    </div>
  )
}

