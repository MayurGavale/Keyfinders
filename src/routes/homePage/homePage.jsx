import React from 'react'
import './homePage.scss';
import SearchBar from '../../components/searchBar/SearchBar';

function HomePage  ()  {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <div className="title">
        <h1>Find Real Estate & Get Your Dream Place</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquid, obcaecati distinctio quas tempore voluptatem nobis quaerat cum dolorum nisi laudantium dolore dicta. Mollitia, tempora!
        </p>
        <SearchBar />
        <div className="boxes">
          <div className="box">
            <h1>16+</h1>
            <h2>Years Of Experince</h2>
          </div>
          <div className="box">
            <h1>200</h1>
            <h2>Award Gained</h2>
          </div>
          <div className="box">
            <h1>1200+</h1>
            <h2>Property Ready</h2>
          </div>
        </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="/" />
      </div>
    </div>
  )
}

export default HomePage;