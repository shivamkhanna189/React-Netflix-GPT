import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div >
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMAGE}></img>
      </div>
      <GPTSearchBar></GPTSearchBar>
      <GPTMovieSuggestion></GPTMovieSuggestion>
    </div>
  );
};

export default GptSearch;
