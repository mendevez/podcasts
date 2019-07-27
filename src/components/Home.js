import React from "react";
import PopularPodcastList from "./PopularPodcastList";
import Spinner from "react-loader-spinner";
import fetchPopular from "../hooks/FetchPopular";


const Home = () => {

  const [podcasts, loading] = fetchPopular();
  
  return (
    <div className = "container">{
      loading ? (
        <div className = "spinner">
          <Spinner type = "ThreeDots" color="#2f558f " height="200" width="200" />
        </div>
      ) : (
        <div>
          <PopularPodcastList podcasts = {podcasts}/>
        </div>
      )
    }</div>
  )



};

export default Home;
