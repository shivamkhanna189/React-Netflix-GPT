export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const NOW_PLAYING_API_URL = 'https://api.themoviedb.org/3/movie/now_playing';
export const POPULAR_MOVIES_API_URL = 'https://api.themoviedb.org/3/movie/popular';
export const MOVIE_API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANGUAGES = [
  { label: "English", value: "en" },
  { label :"Hindi" , value :"hindi"}
]

export const OPENAI_API_KEY = process.env.REACT_APP_OPEN_API_KEY

export const SEARCH_MOVIE ="https://api.themoviedb.org/3/search/movie"