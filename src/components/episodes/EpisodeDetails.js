import React from "react";
import Spinner from "react-loader-spinner";
import FetchPodcastById from "../../hooks/FetchPodcastById";

const EpisodeDetails = props => {
  const { id } = props.match.params;
  const type = "episodes";
  const [podcast, loading] = FetchPodcastById(type, id);
  const { image, title, audio } = podcast;

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Spinner type="ThreeDots" color="#2f558f " height="200" width="200" />
        </div>
      ) : (
        <div className="episode-details">
          <img className="episode-image" src={image} alt={title} />
          <h3 className="episode-title">{title}</h3>
          <audio src={audio} controls />
        </div>
      )}
    </div>
  );
};

export default EpisodeDetails;
