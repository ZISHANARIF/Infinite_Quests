import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu } from "react-icons/hi";


export const Headers = () => {

    const [show, setShow] = useState(false)

const handleButtonTog = () =>{
    return setShow(!show);
}

  return (
    <header>
        <div className='container'>
            <div className='grid navbar-grid'>

                <div className='logo'>
                    <NavLink to="/">
                    <h1>Infinite Quests</h1>
                    </NavLink>
                </div>
                <nav className={show ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/country">Country</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">Universe</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                        <li>
                            <NavLink to="/"></NavLink>
                        </li>
                        
                    </ul>
                </nav>
                <div className='ham-menu'>
                    <button onClick={handleButtonTog}>
                    <HiOutlineMenu />
                    </button>
                </div>

            </div>
        </div>

    </header>
  )
}
