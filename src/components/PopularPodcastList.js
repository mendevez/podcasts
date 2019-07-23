import React from "react";
import { NavLink } from "react-router-dom";

const PopularPodcastList = ({ podcasts }) => {
  const podcast =
    podcasts &&
    podcasts.map(podcast => {
      return (
        <NavLink
          to={"/search/podcasts/" + podcast.id}
          activeClassName="active"
          className="item-link popular-podcast-item p-1"
          key={podcast.id}
        >
          <img src={podcast.image} alt={podcast.title} />
          <h1>{podcast.title}</h1>
          <h1>Total Episodes: {podcast.total_episodes}</h1>
        </NavLink>
      );
    });

  return (
    <div className="popular-podcast-list p-1 font-size-s">{podcast}</div>
  );
};

export default PopularPodcastList;
