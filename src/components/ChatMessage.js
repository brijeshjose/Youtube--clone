import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-end gap-3 py-1">
      <div className='flex gap-2'>
        <span>
          <img
            width={20}
            className="rounded-[9999px]"
            src="https://yt4.ggpht.com/ytc/AIf8zZTMThXrW361Cl3RlWzZ8oSZSii25ax5XnS2ZbMELX2osQKrdkoVQZceeQ1zX2t3=s64-c-k-c0x00ffffff-no-rj"
            alt="profile "
          />
        </span>
        <span className="text-sm text-[14px] opacity-95 font-normal"> {name} </span>
      </div>
      <span className="text-sm font-normal"> {message} </span>
    </div>
  );
}

export default ChatMessage