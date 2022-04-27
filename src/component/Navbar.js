import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import logo from '../img/logo.png';
import './home.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navnar = () => {
    return(
        <>
        <div className="desktopnav">
         <div className="sidebar">
            <img src={logo} className="imglogo"/>
            <div className="placee">
              <Link to="/">
               <button type="button" class="btn btn-primary" style = {{background:"#0F1E56",marginLeft:'5px',marginTop:'20px'}}><AiIcons.AiOutlineUnorderedList/></button>
               </Link>
               <p className="textbut">Place</p>
            </div>
        </div>
         
        <nav class="navbar navbar-light"  style = {{background:"#134B8A"}}>
        <a class="navbar-brand"></a>
           <form class="d-flex">
             <div className="iconNav">
                 <AiIcons.AiFillBell />
                 <span class="position-absolute top-10 start-150 translate-middle p-1 bg-danger border border-light rounded-circle">
                     <span class="visually-hidden">New alerts</span>
                 </span>
             </div>
             <img src="https://www.perfectcompanion.com/wp-content/uploads/2020/10/image1.jpg" className="imgpro"/>
             <p className="textpro">Wannaporn   <AiIcons.AiOutlineDown/></p>
           </form>
        </nav>
        </div>

        <div className="mobilenav">
        <nav class="navbar navbar-light"  style = {{background:"#134B8A"}}>
          <img src={logo} className="imglogobo"/>
           <form class="d-flex">
             <img src="https://www.perfectcompanion.com/wp-content/uploads/2020/10/image1.jpg" className="imgprobo"/>
           </form>
        </nav>
        </div>
        </>
    )
}

export default Navnar;