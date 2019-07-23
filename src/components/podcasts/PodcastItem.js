import React from "react";

const PodcastItem = ({ podcast }) => {
  const { title_original, thumbnail } = podcast;

  return (
    <div className="podcast-item p-1">
      <img
        src={thumbnail}
        className="podcast-item-thumbnail"
        alt={title_original}
      />

      <h1 className="podcast-item-title font-size-s ">{title_original}</h1>
    </div>
  );
};

export default PodcastItem;
