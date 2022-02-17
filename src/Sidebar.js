import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateProviderValue } from "./StateProvider";

function Sidebar() {
    const [{ playlists }, dispatch] = useStateProviderValue() //pulling

  return (
    <div className='sidebar'>
        <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon} title="YourLibrary"/>
        <br/>
        <strong className='sidebar__title'>Playlists</strong>
        <hr />

        {playlists?.items?.map(playlist => {
            <SidebarOption title={playlist.name}/>
        })}
        <SidebarOption title="Hip hop"/>
        <SidebarOption title="Jazz"/>
        <SidebarOption title="E-d-m"/>
        <SidebarOption title="#My Playlist"/>
        <SidebarOption title="PostMalone"/>
    </div>
  )
}

export default Sidebar;