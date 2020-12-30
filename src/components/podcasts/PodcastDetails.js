import React from "react";
import Spinner from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import FetchPodcastById from "../../hooks/FetchPodcastById";

const PodcastDetails = props => {
  const { id } = props.match.params;
  const type = "podcasts";
  const [resource, loading] = FetchPodcastById(type, id);
  const { image, title, email, episodes } = resource;

  const episode =
    episodes &&
    episodes.map(episode => {
      return (
        <NavLink
          to={"/search/episodes/" + episode.id}
          className="episode-link font-size-xl p-1"
          key={episode.id}
        >
          {episode.title}
        </NavLink>
      );
    });

  return (
    <div className="container">
      {loading ? (
        <div className="spinner">
          <Spinner type="ThreeDots" color="#2f558f " height="200" width="200" />
        </div>
      ) : (
        <div className="podcast-episode-wrapper p-1">
          <img src={image} alt={title} />
          <h1>{title}</h1>
          <h1 className="email">Email: {email}</h1>
          <h1 className="list-title">Episodes:</h1>
          <hr />
          {episode}
        </div>
      )}
    </div>
  );
};

export default PodcastDetails;
