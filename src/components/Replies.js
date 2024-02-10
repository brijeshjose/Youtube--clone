import React from 'react'
import { CgProfile } from "react-icons/cg";


const Replies = ({data}) => {
  const {text,name,replies}=data
  return (
    <div>
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
            {replies?.map((data) => (
              <div className="flex gap-2 " key={data.id}>
                <div>
                  <CgProfile fontSize={30} />
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-[14px] text-slate-800 font-semibold">
                    @{data.name}
                  </div>
                  <div className="text-[15px]">{data.text} </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Replies