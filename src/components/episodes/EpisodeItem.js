import React from "react";

const EpisodeItem = ({ episode }) => {
  const { title_original, publisher_original, thumbnail } = episode;

  return (
    <div className="episode-list p-1">
      <img src={thumbnail} className="episode-thumbnail p-1" alt={title_original} />
      <div className="episode-title-publisher p-1 font-size-l">
        {title_original}
        <br />
        <br />
        <span className="text-bold">Publisher: </span>
        {publisher_original}
      </div>
    </div>
  );
};

export default EpisodeItem;
