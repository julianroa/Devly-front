import React from "react"
import "./Header.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";

import { Link, useNavigate} from "react-router-dom";


function Header({backButton}) {
    const history = useNavigate();

    return (
        <div className="header">

                
 
            
            {backButton ? (
                <IconButton onClick={() => history(backButton, {replace: true})}>
                    <ArrowBackIosNewSharpIcon className="header__backButton" fontSize='large' />
                </IconButton>    
            
            ) : (


                <Link to="/user">
                <IconButton>
                <AccountCircleSharpIcon className="header__icon" fontSize="large"/>
                </IconButton>
                </Link>

            )}
            



            <Link to="/">           
            <img 
            className="header__logo"
            src="https://i.imgur.com/YuJesaT.png"
            alt="devly logo"
            />           
            </Link>

            <Link to="/chat">
            <IconButton>
            <ChatBubbleSharpIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>


            
        </div>
  )
}

export default Header;