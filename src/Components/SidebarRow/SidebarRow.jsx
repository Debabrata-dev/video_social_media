import React from 'react'
import './SidebarRow.css'
import { Link } from 'react-router-dom'


function SidebarRow({ selected, Icon, title, link }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Link to={link}>
        <Icon className={"sidebarRow_icon"}/>
        <h2 className="sidebarRow_title">{title}</h2>
      </Link>
    </div>
  )
}

export default SidebarRow
