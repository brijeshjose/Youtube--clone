import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import SubscriptionBox from './SubscriptionBox'
import RecommendedVideos from './RecommendedVideos'

import { YOUTUBE_API } from '../utils/constants';

const WatchPage = () => {
  const [searchParam] = useSearchParams()
  const [videos, setVideos] = useState([]);
   const presentVideo = videos.find((video) => video.id === searchParam.get('v'));
   
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  }) 

     const getVideos = async () => {
       const response = await fetch(YOUTUBE_API);
       const data = await response.json();
       setVideos(data.items);
     };
     useEffect(() => {
       getVideos();
     }, []);

  return (
    <div className="px-4 py-4 mx-auto ">
      <div className="flex gap-3">
        <div>
          <iframe
            className="rounded-xl"
            width="850"
            height="480"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <SubscriptionBox id={searchParam.get("v")} />
            {/* comments container */}
            <CommentsContainer />
          </div>
        </div>
        {/* recommended videos */}
        <div>
          {presentVideo?.snippet?.liveBroadcastContent === "none" ? (
            ""
          ) : (
            <LiveChat />
          )}
        </div>

        <div>
          <RecommendedVideos presentVideo={videos} />{" "}
        </div>
      </div>
    </div>
  );
}

export default WatchPage