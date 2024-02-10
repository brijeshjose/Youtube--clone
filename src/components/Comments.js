import React from "react";
import { CgProfile } from "react-icons/cg";
import Replies from "./Replies";


const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div >
      <div className="flex gap-2 ">
        <div>
          <CgProfile fontSize={30} />
        </div>
        <div className="flex flex-col items-start">
          <div className="text-[14px] text-slate-800 font-semibold">
            @{name}
          </div>
          <div className="text-[15px]">{text} </div>
          <div className="pt-2 ">
            {replies.map((data) => (
              <Replies data={data} key={data.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
