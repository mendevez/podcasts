import React, { useState } from "react";
import SearchBar from "./SearchBar";
import listennotes from "../api/listennotes";
import EpisodeList from "../components/episodes/EpisodeList";
import PodcastList from "../components/podcasts/PodcastList";
import Spinner from "react-loader-spinner";

const Search = () => {
  const [podcasts, setPodcasts] = useState();
  const [episodes, setEpisodes] = useState();
  const [loading, setLoading] = useState(false);

  // Fetch podcasts and episodes matching the search term
  const getResources = async searchTerm => {

    // display spinner before fetching data 
    setLoading(true);

    // fetch podcasts 
    const podcasts = await listennotes.get(
      `/search?q=${searchTerm}&sort_by_date=1&type=podcast`
    );
    setPodcasts(podcasts.data.results);

    // fetch episodes
    const episodes = await listennotes.get(
      `/search?q=${searchTerm}&sort_by_date=1&type=episode&next_offset=1`
    );
    console.log(episodes)
    setEpisodes(episodes.data.results);
    setLoading(false);
  };

  return (
    <div className="container">
      <SearchBar getResources={getResources} />

      {loading ? (
        <div className="spinner">
          <Spinner type="ThreeDots" color="#2f558f " height="200" width="200" />
        </div>
      ) : (
        <div>
          <PodcastList podcasts={podcasts} />
          <EpisodeList episodes={episodes} />
        </div>
      )}
    </div>
  );
};

export default Search;
