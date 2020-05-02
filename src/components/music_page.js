import React from "react";

import DividerHeading from "./divider_heading";
import UpcomingShows from "./upcoming_shows_section";
import Cowbell from "./cowbell";

import missed_connections from "../images/albums/missed_connections.jpg";
import carry_on from "../images/albums/carry_on.jpg";
import tourist_information from "../images/albums/tourist_information.jpg";
import postcards from "../images/albums/postcards.jpg";

const albumItem = (props) => {
  const { title, year, image_url, cdbaby_url } = props;
  return (
    <li key={year}>
      <h4>{`${title} - ${year}`}</h4>
      <a href={cdbaby_url} target="_blank" rel="noopener noreferrer">
        <img className="album_cover" src={image_url} alt="album_cover" />
      </a>
    </li>
  );
};

const albumsArray = [
  {
    title: "Missed Connections",
    year: "2018",
    image_url: missed_connections,
    tracks: [],
    cdbaby_url: "https://theconstanttourists.bandcamp.com/",
  },
  {
    title: "Carry On",
    year: "2012",
    image_url: carry_on,
    tracks: [],
    cdbaby_url: "https://theconstanttourists.bandcamp.com/",
  },
  {
    title: "Tourist Information",
    year: "2011",
    image_url: tourist_information,
    tracks: [],
    cdbaby_url: "https://theconstanttourists.bandcamp.com/",
  },
  {
    title: "Postcards",
    year: "2009",
    image_url: postcards,
    tracks: [],
    cdbaby_url: "https://theconstanttourists.bandcamp.com/",
  },
];

const Music = () => (
  <div>
    <div className="layoutTopPadding"></div>
    <DividerHeading headerText={"Albums"} />
    <ul id="album_list">{albumsArray.map((a) => albumItem(a))}</ul>
    <UpcomingShows />
    <DividerHeading headerText={"Video"} />
    <iframe
      title="love_is_dumb"
      id="love_is_dumb"
      width="420"
      height="315"
      src="https://www.youtube.com/embed/H3rwkCEij88"
      frameBorder="0"
      allow={
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      }
      allowFullScreen
    />
    <Cowbell />
  </div>
);

export default Music;
