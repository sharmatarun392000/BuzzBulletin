import React from 'react'
import { Link } from "react-router-dom";
import './file.css'
import {homelogo,Entertainment,General, Health,Science, Sports, Technology,Business} from './imageexport.js'

const NavBar = (props) => {
    let {white,color2}=props;
    return (
        <div>
            <nav className="left">
        <div className="element_box">
        <div className="listitems" >
                            <li className="leftitems" style={{backgroundColor:color2, }}><Link style={{color:white}}  aria-current="page" to="/"><img className="listitemsimg" src={homelogo} alt="" /> Home</Link></li>
                            <li className="leftitems"style={{backgroundColor:color2}}> <Link style={{color:white}}  to="/business"> <img className="listitemsimg" src={Business} alt="" /> Business </Link></li>
                            <li className="leftitems" style={{backgroundColor:color2}}><Link style={{color:white}} to="/entertainment"><img className="listitemsimg" src={Entertainment} alt="" />Entertainment</Link></li>
                            <li className="leftitems"style={{backgroundColor:color2}}><Link style={{color:white}}  to="/general"><img className="listitemsimg" src={General} alt="" />General</Link></li>
                            <li className="leftitems"style={{backgroundColor:color2}}><Link style={{color:white}}  to="/health"><img className="listitemsimg" src={Health} alt="" />Health</Link></li>
                            <li className="leftitems" style={{backgroundColor:color2}}><Link style={{color:white}} to="/science"><img className="listitemsimg" src={Science} alt="" />Science</Link></li>
                            <li className="leftitems"style={{backgroundColor:color2}}><Link style={{color:white}}  to="/sports"><img className="listitemsimg" src={Sports} alt="" /> Sports</Link></li>
                            <li className="leftitems"style={{backgroundColor:color2}}><Link style={{color:white}} to="/technology"> <img className="listitemsimg" src={Technology} alt="" />Technology</Link></li>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar