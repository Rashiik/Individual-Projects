import React, {useState ,useEffect } from 'react'
import "./sidebar.css"
//import avatar1 from './avatar1.jpg'
import SidebarButton from './sidebarButton'
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";
export default function Sidebar() {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
    );
  
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className='sidebar-container'>Sidebar
    <img src={image} className='profile-img' alt='profile' />
    <div>
        <SidebarButton  title ="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
        <SidebarButton title ="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title ="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title ="Favorites" to="/favorites" icon={<MdFavorite />}/>
        <SidebarButton title ="Library" to="/" icon={<IoLibrary />}/>
    </div>
    <SidebarButton title ="Sign Out" to="" icon={FaSignOutAlt}/>
    </div>
  )
}
