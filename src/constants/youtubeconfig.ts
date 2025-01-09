const api_cred = process.env.REACT_APP_YOUTUBE_API;

// most popular videos in india, max result 20
export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=AIzaSyBLFLuiiI5MSzP0ZdA0_5T8JkZvUkhIWCU`;

export const YOUTUBE_API_SEARCH = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBLFLuiiI5MSzP0ZdA0_5T8JkZvUkhIWCU&regionCode=IN&type=video&maxResults=20`;

export const YOUTUBE_API_SUGGESTIONS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBLFLuiiI5MSzP0ZdA0_5T8JkZvUkhIWCU&regionCode=IN&type=video&maxResults=6`;

export const YOUTUBE_API_COMMENTS = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=replies%2Csnippet&maxResults=10&key=AIzaSyBLFLuiiI5MSzP0ZdA0_5T8JkZvUkhIWCU&videoId=`;

export const YOUTUBE_CHANNEL_DETAILS = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&key=AIzaSyBLFLuiiI5MSzP0ZdA0_5T8JkZvUkhIWCU&id=`;

/* 

👁 Most pipular videos :

GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=[YOUR_API_KEY] 


👁 Searched videos :

https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=random&regionCode=IN&type=video&key=[YOUR_API_KEY]

👁 Comments Thread :

https://youtube.googleapis.com/youtube/v3/commentThreads?part=replies%2Csnippet&maxResults=50&videoId=LtKRnGO2ZDg&key=[YOUR_API_KEY]

👁 Channel Details :

https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=UC3XBkDeCVXCoCofFgfUZXGw&key=[YOUR_API_KEY]

*/
