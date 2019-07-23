import React from "react";
import PodcastItem from "./PodcastItem";
import { NavLink } from "react-router-dom";

const PodcastList = ({ podcasts }) => {
  const podcastList =
    podcasts &&
    podcasts.map(podcast => {
      return (
        <NavLink
          to={"/search/podcasts/" + podcast.id}
          className="item-link"
          key={podcast.id}
        >
          <PodcastItem podcast={podcast} key={podcast.id} />
        </NavLink>
      );
    });
  return <div className="podcast-list">{podcastList}</div>;
};

export default PodcastList;
