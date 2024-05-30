import {TMDB_IMG_CDN_URL} from "../utils/constants"
const MovieCard = ( {img_path}) => {
    return <div className="w-40 pr-2">
        <img src={ TMDB_IMG_CDN_URL + img_path} alt="Movie Card img"></img>
    </div>
}

export default MovieCard;