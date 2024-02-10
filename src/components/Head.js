import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  console.log(suggestions);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  //api call for getting search suggestions
  const getSearchQuerySuggestions = async () => {
    if (searchQuery?.length === 0) return null;
    const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(cachedResults({ [searchQuery]: [...data[1]] }));
   
  };

  //
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchQuerySuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="flex items-center justify-between w-full p-4 ">
      <div className="flex items-center gap-4">
        <LuMenu
          fontSize={25}
          className="cursor-pointer "
          onClick={toggleMenuHandler}
        />
        <img src="logo.png" alt="logo" width={120} />
      </div>
      <div className="relative flex items-center justify-between gap-4 p-2 border-2 border-gray-400 rounded-3xl md:w-[500px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          placeholder="Search"
          className="px-2 outline-none lg:w-[90%]"
          onFocus={() => setshowSuggestions(true)}
          onBlur={() => setshowSuggestions(false)}
        />
        <button>
          <CiSearch fontSize={20} />
        </button>
        {showSuggestions && searchQuery && (
          <div className="absolute left-0 z-10 w-full py-4 bg-white shadow shadow-slate-500 rounded-xl top-12">
            <ul className="flex flex-col ">
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex items-center w-full gap-4 p-2 hover:bg-gray-100"
                >
                  <span>
                    <CiSearch fontSize={20} />
                  </span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <CgProfile fontSize={25} />
      </div>
    </div>
  );
};

export default Head;
