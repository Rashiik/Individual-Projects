import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import AudioPLayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";

export default function Player() {
  const location = useLocation();
  console.log(location);
  const [tracks, setTracks] = useState([]);
  //hold all the track apin from the playlists
  const [currentTrack, setCurrentTrack] = useState({});
  //hold current track empty object
  const [currentIndex, setCurrentIndex] = useState(0);
  //go to next track or previous

  useEffect(() => {
    if (location.state) {
      apiClient.get("playlists/" +location.state?.id+ "/tracks")
        .then((res) => {
          console.log(res.data);
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        {/* about current tracks */}
         <AudioPLayer
          currentTrack={currentTrack} 
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        /> 
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> 
      </div>
      <div className="right-player-body">
        {/* display all te album and quequ  */}
        
        <SongCard album={currentTrack?.album} />
        {/* <SongCard /> */}
        
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}