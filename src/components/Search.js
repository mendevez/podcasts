import React, { useState } from "react";
import SearchBar from "./SearchBar";
import listennotes from "../api/listennotes";
import EpisodeList from "../components/episodes/EpisodeList";
import PodcastList from "../components/podcasts/PodcastList";
import Spinner from "react-loader-spinner";
import axios from "axios";

const Search = () => {
  const [podcasts, setPodcasts] = useState();
  const [episodes, setEpisodes] = useState();
  const [loading, setLoading] = useState(false);

  const source = axios.CancelToken.source();


  const getResources = async searchTerm => {
    
    setLoading(true);

    const podcasts = await listennotes.get(
      `/search?q=${searchTerm}&sort_by_date=1&type=podcast`,
      {
        cancelToken: source.token
      }
    );
    setPodcasts(podcasts.data.results);

    const episodes = await listennotes.get(
      `/search?q=${searchTerm}&sort_by_date=1&type=episode`,
      {
        cancelToken: source.token
      }
    );
    setEpisodes(episodes.data.results);
    setLoading(false);
    
  };

  return (
    <div className="container">
      <SearchBar getResources = {getResources} />

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
