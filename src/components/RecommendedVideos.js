import React from "react";
import RecommendedVideoCard from "./RecommendedVideoCard";
import { Link } from "react-router-dom";

const RecommendedVideos = ({ presentVideo }) => {
 

  return (
    <div className="flex flex-col gap-2">
      {presentVideo.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <RecommendedVideoCard presentVideo={video} />
        </Link>
      ))}
    </div>
  );
};

export default RecommendedVideos;
