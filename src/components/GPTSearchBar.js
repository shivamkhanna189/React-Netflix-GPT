import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants"
import { useRef } from "react";
import openai from "../utils/openai";
import { MOVIE_API_OPTIONS, SEARCH_MOVIE } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const selectedLanguage = useSelector(store => store.config.language)

  const fetchSearchedMovie = async (name) => {
    const data = await fetch(SEARCH_MOVIE + `?query=${name}&include_adult=false&language=en-US&page=1`, MOVIE_API_OPTIONS)
    const json = await data.json();
    return json.results
  }
  
  const handleGPTSearchClicked = async() => {
    
    // openai api hit
    // const openAIResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: searchText.current.value }],
    //   model: 'gpt-3.5-turbo',
    // });

    const movieList = ['Padosan', "Koi Mil Gaya ", "Hera Pheri", "Dhamaal", "3 Idiots"];

    const movieInfoList = await Promise.all(movieList.map(movie => fetchSearchedMovie(movie)));
    dispatch(addGptMovies({movieNames : movieList,movieResults : movieInfoList  }))
  }

  return (
    <div className=" flex justify-center pt-10">
      <form onSubmit={e =>e.preventDefault()} className="bg-black w-1/2  grid grid-cols-12">
        <input
          ref={searchText}
          className="p-2 m-2 border-2 border-black col-span-9"
          type="text"
          placeholder={lang[selectedLanguage].gptSearchPlaceholder}
        />
        <button className=" p-2 m-2 bg-red-700 rounded-lg col-span-3"
        onClick={handleGPTSearchClicked}
        >{lang[selectedLanguage].search}</button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
