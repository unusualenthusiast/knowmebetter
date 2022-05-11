import React from 'react';
import { navHeaderData, homePageData } from './constants';
import './Home.css';

function Home() {
  const { name, shortDescription } = homePageData;
  return (
    <div id="home">
      <header>
        {navHeaderData.order.map((id, ind) => {
          const { label, urlPath } = navHeaderData.data[id];
          return (
            <nav key={`navLine-${ind}`}><a href={`#${urlPath}`}>{label}</a></nav>
          )
        })}
      </header>
      <section>
        <section id="photo_wallpaper">
          <img src="photo_gray.jpg"></img>
        </section>
        <section id="name_description">
          <div id="name">
            <span>{name}</span>
          </div>
          <div id="separator"></div>
          <div id="short-description">
            <span>{shortDescription}</span>
          </div>
        </section>
      </section>

    </div>
  );
}
export default Home;
