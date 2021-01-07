import React from 'react';
import Spinner from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import FetchPodcastById from '../../hooks/FetchPodcastById';

const PodcastDetails = (props) => {
  const { id } = props.match.params;
  const type = 'podcasts';
  const [resource, loading] = FetchPodcastById(type, id);
  const { image, title, episodes } = resource;

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner type="ThreeDots" color="#2f558f " height="200" width="200" />
        </div>
      ) : (
        <div className="podcast-details">
          <img className="podcast-image" src={image} alt={title} />
          <h1>{title}</h1>

          <div className="podcast-episode-list">
            <h1 className="list-title">Episodes:</h1><hr />
            {episodes &&
              episodes.map((episode) => {
                return (
                  <Link
                    key={episode.id}
                    className="podcast-episode-title"
                    to={'/search/episodes/' + episode.id}
                  >
                    {episode.title}
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default PodcastDetails;
