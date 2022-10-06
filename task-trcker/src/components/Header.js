import React from "react";
import Button from "./Button"
import {useLocation} from 'react-router-dom'
function Header({onAdd, showAdd}){
        const location =useLocation()
    return(
        <header className="header">
        <h1>Task tracker </h1> 
        {location.pathname==='/' && <Button 
        color={showAdd? 'black': 'coral'} 
        text={showAdd ?'Close' : 'Add'}
        onClick={onAdd}
        />}
        </header>
    )
}
// Header.defaultProps{
//     title: "Task-Tracker" <Button color="red" text="Hello1"/>
       // } <Button color="white" text="Hello2"/>
export default Header;
//using jsonserver