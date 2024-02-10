const API_KEY = "AIzaSyCJppvgodfIq51xC34zSsg3j2dGfp2tDWg";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +API_KEY;

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&gl=IN&q="; 




export const YOUTUBE_SEARCH_VIDEO_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=YOUR_SEARCH_TERM&type=video&maxResults=50&regionCode=IN&key=" +
  API_KEY;
