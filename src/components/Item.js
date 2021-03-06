import React from 'react'
import playIcon from '../assets/images/play-icon.png'
import plusIcon from '../assets/images/plus-icon.png'
import propTypes from 'prop-types'

import '../assets/styles/components/Item.scss'
const Item = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt="cover video" />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={plusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">
        {year} {contentRating} {duration} minutos
      </p>
    </div>
  </div>
)

Item.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
}
export default Item
