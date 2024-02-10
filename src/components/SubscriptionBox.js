import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";

const SubscriptionBox = (videoId) => {
  const [videos, setVideos] = useState([]);
  
  const presentVideo = videos.find((video) => video.id === videoId.id);
  
  const [showDescription,setshowDescription]=useState(false)
  
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const data = await response.json();
    setVideos(data.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="mt-4 max-w-[850px] m-auto">
      <div>
        <h3 className="text-xl font-semibold">
          {presentVideo?.snippet?.title}
        </h3>
      </div>
      <div className="flex items-center justify-between my-4">
        <div className="flex gap-4">
          {/* profile of youtuber */}
          <div className="flex justify-between gap-2 ">
            <div>
              <img
                width={50}
                className="rounded-[9999px]"
                src="https://yt4.ggpht.com/ytc/AIf8zZTMThXrW361Cl3RlWzZ8oSZSii25ax5XnS2ZbMELX2osQKrdkoVQZceeQ1zX2t3=s64-c-k-c0x00ffffff-no-rj"
                alt="profile"
              />
            </div>

            <div className="flex flex-col items-start justify-start">
              <div className="font-bold">
                {presentVideo?.snippet?.channelTitle}
              </div>
              <div className="text-sm text-gray-600">898K subscribers </div>
            </div>
          </div>

          {/* subscribe */}
          <div>
            <button className="px-3 py-2 text-base font-semibold text-white bg-black rounded-3xl">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          {/* like and dislike */}
          <div className="flex bg-gray-100 rounded-3xl">
            <div className="flex items-center pr-3 border-r">
              <img
                src="like.svg"
                alt="like"
                width={60}
                className=" rounded-xl w-[44px] hover:bg-gray-200 hover:rounded-3xl"
              />
              <span className="text-sm">
                {Math.floor(presentVideo?.statistics.likeCount / 1000) + "K"}{" "}
              </span>
            </div>
            <div>
              <img
                src="like.svg"
                alt="dislike"
                width={60}
                className="rotate-180 w-[44px] hover:bg-gray-200 hover:rounded-3xl -z-10"
              />
            </div>
          </div>

          {/* share */}
          <div className="flex items-center gap-0 px-2 bg-gray-100 rounded-3xl hover:bg-gray-200">
            <img
              src="share.svg"
              alt="share"
              width={60}
              className=" w-[36px] "
            />
            <p>Share</p>
          </div>

          {/* download */}
          <div className="flex items-center justify-center px-3 bg-gray-100 cursor-pointer rounded-3xl hover:bg-gray-200">
            Download
          </div>
        </div>
      </div>
      {/* description */}
      <div className="mt-4 bg-gray-100 rounded-3xl" onClick={()=>setshowDescription(prev => !prev)}>
        <p className="p-4">
          
          {showDescription
            ?presentVideo?.snippet?.description 
            : presentVideo?.snippet?.description.slice(0,
                presentVideo?.snippet?.description
              .length/2)+"...."}
        </p>
      </div>
    </div>
  );
};

export default SubscriptionBox;
