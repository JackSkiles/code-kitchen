import React, { useState } from 'react';
import "./Header2.css"
import { Redirect, Link, withRouter } from 'react-router-dom';

export default function Header(props) {

    const [dropToggle, setDrop] = useState("hide");
    const [clickedInside, setClicked] = useState(false);


    const onClick = (event) => {
        if (dropToggle == "hide") {
            setDrop("show");
        } else {
            setDrop("hide");
        }
    }

    const checkOpen = () => {
        if (dropToggle == "show" && clickedInside == false){
            setDrop("hide");
        }
    }
    return (
        <div className="headerMain">
            <div className="header" onClick={checkOpen}>
                <div className="logoCont"><Link to ="/" className="logoLink"><h1 className="logo">Code Kitchen</h1></Link></div>
               
                <div className="linkCont">
                    <Link to='/' className="smallLinkCont">
                        <div>
                            <h3 className="headerLink">Reviews</h3>
                        </div>
                    </Link>
                    <Link to='portfolio' className="smallLinkCont">
                        <div>
                            <h3 className="headerLink">Submit Review</h3>
                        </div>
                    </Link>
                </div>
                <div className="drop">
                    <button className="dropDownButton" onClick={onClick}><div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div></button>
                </div>
                {/* <div className="dropDownMenu" id={dropToggle} >
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">Portfolio</h3></Link></div>
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">Products</h3></Link></div>
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">About Me</h3></Link></div>
                    <div className="dropItem"><Link to="portfolio"><h3 className="dropDownLink">Contact Me</h3></Link></div>
                </div> */}
            </div>
        </div>
    )
}