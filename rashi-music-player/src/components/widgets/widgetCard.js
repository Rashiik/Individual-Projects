import React, { useState, useEffect} from "react";
import "./widgetCard.css";
import WidgetEntry from "./widgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import APIKit from "../../spotify";

export default function WidgetCard({ title, similar, featured, newRelease }) {
  console.log(
    "similar",
    similar,
    "featured",
    featured,
    "newRelease",
    newRelease
  );

  // const [playlists, setPlaylists] = useState(null);
  // useEffect(() => {
  //   APIKit.get("me/playlists").then(function (response) {
  //     setPlaylists(response.data.items);
  //     //console.log(response.data);
  //   });
  // }, []);

  // const navigate = useNavigate();
  // const playSimilar =(id)=>{
  //   navigate("/favorites", { state: { id: id } });
  // }
  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>
      {similar? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
              //onClick={() => playSimilar(playlist.id)}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
      <div className="widget-fade">
        <div className="fade-button">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}