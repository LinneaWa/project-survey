import React from 'react';
import arrow from './listarrow.png'

// I wanted to make a bullet list with images instead of dots using list-style-image.
// But list-style-image doesn't work with display:flex and I couldn't
// align the text right without it so I ended up putting the image in the list.

export const Summary = ({ name, home, lenght, bike, want }) => {
  return (
    <ul className="summary">
      <li><img src={arrow} alt="arrow icon" />Your name is {name}.</li>
      <li><img src={arrow} alt="arrow icon" />You live {home}.</li>
      <li><img src={arrow} alt="arrow icon" />Your commute to work or school is about {lenght} long.</li>
      <li><img src={arrow} alt="arrow icon" />Do you have a bike to use? {bike}</li>
      <li><img src={arrow} alt="arrow icon" />Your desire to use a bike more is a {want} on a scale from 0-10.</li>
    </ul>
  );
}