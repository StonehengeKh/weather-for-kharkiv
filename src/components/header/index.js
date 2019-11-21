import React from "react"
import {NavLink} from "react-router-dom"

import "./header.css"

const Header = () => (
    <header>
        <NavLink to="/kharkiv_today" className="navlink" activeClassName="navlink__active">Kharkiv today</NavLink>
        <NavLink to="/kharkiv_five_days" className="navlink" activeClassName="navlink__active">Kharkiv for 5 days</NavLink>
    </header>
)

export default Header