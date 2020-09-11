import React from 'react'
import {navbar_links} from '../config'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-left">Eléna</div>
            <div className="navbar-right">
                {navbar_links.map((link) => {
                    return <a className="navbar_button" href={link.href}>{link.label}</a>
                })}
               
            </div>
        </div>
    )
}

export default Navbar