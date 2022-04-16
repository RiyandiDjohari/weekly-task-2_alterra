import React from 'react'
import { Link } from 'react-router-dom';
import { sidebarItems } from "./SidebarItems";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-items">
        {sidebarItems.map((item) => {
          return (
            <li key={item.id} className={item.sName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Sidebar