import React from 'react'

const RecommendedVideoCard = ({presentVideo}) => {
    
  return (
    <div className="flex gap-2  max-w-[400px]">
      <div className="w-[168px] h-[100px] flex-none ">
        <img
          src={presentVideo?.snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          <p> {presentVideo?.snippet?.title.split('').slice(0,40).join("")+"...."}</p>
        </div>
        <div className="text-xs gray-800 ">
          {presentVideo?.snippet?.channelTitle}
        </div>
        <div className="text-xs gray-800 ">
          {Math.floor(presentVideo?.statistics?.viewCount / 1000) + "K views"}
        </div>
      </div>
    </div>
  );
}

export default RecommendedVideoCard