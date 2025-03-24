const YOUTUBE_API_KEY = "AIzaSyAqg3qEs_6VSn17Ku_XX-MyFhSEkrjeYKc";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SUGGESTION =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHAT_COUNT = 20;