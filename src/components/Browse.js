import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies"
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch"

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies();
    
    const isGPTSearchClicked = useSelector(store => store.gpt.isGPTSearchClicked)
    console.log(isGPTSearchClicked)
    return (<div>
        <Header></Header>
        {
            isGPTSearchClicked ? <GptSearch></GptSearch> :
              <> <MainContainer></MainContainer>
                    <SecondaryContainer></SecondaryContainer>
                    </> 
        }
        
    </div>)
}

export default Browse; 