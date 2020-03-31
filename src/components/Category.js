import React from 'react'
import Carousel from './Carousel'
import '../assets/styles/components/Category.scss'

const Category = (props) => (
  <div>
    <h3 className="categories__title">{props.title}</h3>
    {props.children}
  </div>
)

export default Category
