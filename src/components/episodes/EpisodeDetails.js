import React from "react";
import Spinner from "react-loader-spinner";
import fetchResources from "../../hooks/FetchResourcesId";

const EpisodeDetails = props => {
  const { id } = props.match.params;
  const type = "episodes";
  const [resource, loading] = fetchResources(type, id);
  const { image, title, audio, description } = resource;

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Spinner type="ThreeDots" color="#2f558f " height="200" width="200" />
        </div>
      ) : (
        <div className="container podcast-episode-wrapper">
          <img className = "p-1"src={image} alt={title} />
          <h3 className ="p-1">{title}</h3>
          <p className = "description p-1">{description}</p>

          <audio src={audio} controls />
        </div>
      )}
    </div>
  );
};

export default EpisodeDetails;
