import React  from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || [];
  const { channelTitle, title, thumbnails } = snippet ?? [];
  



  
  return (
    <div className="w-[340px]">
      <div>
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className="w-[380px] h-[220px] object-cover  rounded-lg"
        />
      </div>
      <div className="mt-2">
        <div></div>
        <div>
          <div className="font-bold">
            {title.split("").slice(0, 40).join("") + "...."}
          </div>
          <div className="text-gray-700"> {channelTitle} </div>
          <div className="flex gap-2">
            <div className="text-gray-700">
              {Math.floor(statistics?.viewCount / 1000)}K views
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
