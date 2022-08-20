import "./Nav.css";
import React, { useEffect, useState } from 'react'

function Nav() {
    const [show, handleShow] = useState(false);
    const  scrollHandlerFn = scrollHandler.bind(this);
    function scrollHandler(){
        if(window.scrollY>100){
            handleShow(true);
        }
        else handleShow(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollHandlerFn);
        return ()=>{
            window.removeEventListener("scroll",scrollHandlerFn);
        }
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
        />

        <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Logo"
        />
        
    </div>
  )
}

export default Nav