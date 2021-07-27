import React from 'react';
import {Image} from 'next'


const SongList = ({ title, artist, price, image, link }) => {

  return (

    <div className="items"   data-testid="songsList" >
      <div className="subitem">
        <h1 className="subtitle">{title}</h1>
        <Image className="subimg" src={image} alt="album art" />
        <h2 className="artist">{artist}</h2>
        <p className="price">{price}</p>
        <a className="myButton" href={link}>See More</a>

      </div>
    </div>


  );
}
export default SongList
