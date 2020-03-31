import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Category from './components/Category'
import Carousel from './components/Carousel'
import Item from './components/Item'
import Footer from './components/Footer'
import useInitialState from './hooks/useInitialState'

const API = 'http://localhost:3000/initialState'

const App = () => {
  const state = useInitialState(API)

  return !state ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="app">
      <Header />
      <Search />
      {state.mylist.length && (
        <Category title="Mi Cuenta">
          <Carousel>
            {state.mylist.map(video => {
              return (
                <Item
                  cover={video.cover}
                  title={video.title}
                  year={video.year}
                  contentRating={video.contentRating}
                  duration={video.duration}
                  key={video.id}
                />
              )
            })}
          </Carousel>
        </Category>
      )}

      {state.trends.length && (
        <Category title="Tendencias">
          <Carousel>
            {state.trends.map(video => {
              return (
                <Item
                  cover={video.cover}
                  title={video.title}
                  year={video.year}
                  contentRating={video.contentRating}
                  duration={video.duration}
                  key={video.id}
                />
              )
            })}
          </Carousel>
        </Category>
      )}
      {state.originals.length && (
        <Category title="Originales de Platzi Video">
          <Carousel>
            {state.originals.map(video => {
              return (
                <Item
                  cover={video.cover}
                  title={video.title}
                  year={video.year}
                  contentRating={video.contentRating}
                  duration={video.duration}
                  key={video.id}
                />
              )
            })}
          </Carousel>
        </Category>
      )}
      <Footer />
    </div>
  )
}

export default App
