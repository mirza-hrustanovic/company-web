import Logo from "./Logo";
import "../styles/navbar.css";
import "../styles/mobile.css";
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu';
import {x} from 'react-icons-kit/feather/x'
import {useState, useEffect} from "react";


const NavBar = () =>{
const [toggle,setToggle] = useState(false);
const [screenWidth,setScreenWidth] = useState(window.innerHeight);
const handleToogle = () =>{
  setToggle(!toggle);
}

useEffect(() =>{
  const updateWidth = () =>{
    setScreenWidth(window.innerWidth);
  }
  window.addEventListener("resize",updateWidth);

  updateWidth();
  return  () =>{
    window.removeEventListener("resize",updateWidth)
  }
},[])
       
//function to shrink and resize navbar on scrool
  //  window.onscroll = function() {scrollFunction()};
/*function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbr").style.height = "100px";
    document.getElementById("logo").style.height="70px"
  } else {
    document.getElementById("navbar").style.height = "150px";
    document.getElementById("logo").style.height="130px"
  }*/
//}
    return(
    
        
         <div className="navBar" id="navbar">
            <div className="logo" id="logo">
                <a href="/" ><Logo/></a>
                 </div>
          
       <div className="navBarLinks" id="navBarLinks">
        {(toggle || screenWidth > 768) && <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li><a href="/services">Services</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>}
        
        
       </div>
       <div className="hamburger" onClick={handleToogle}>
        {toggle? <Icon icon={x} size={35}/ >: <Icon icon={menu} size={35}/ >}
       </div>
       
   </div>)
}

export default NavBar;