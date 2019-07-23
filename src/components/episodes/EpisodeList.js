import React from "react";
import EpisodeItem from "./EpisodeItem";
import { NavLink } from "react-router-dom";

const EpisodeList = ({ episodes }) => {
  return (
    <div>
      {episodes &&
        episodes.map(episode => {
          return (
            <NavLink
              to={"/search/episodes/" + episode.id}
              key={episode.id}
              className="item-link"
            >
              <EpisodeItem episode={episode} key={episode.id} />
            </NavLink>
          );
        })}
    </div>
  );
};

export default EpisodeList;
