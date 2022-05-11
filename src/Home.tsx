import React from 'react';
import { navHeaderData, homePageData } from './constants';
import './Home.css';

function Home() {
  const { name, shortDescription } = homePageData;
  return (
    <div id="home">
      <header>
        {navHeaderData.order.slice().reverse().map((id, ind) => {
          const { label, urlPath } = navHeaderData.data[id];
          return (
            <nav key={`navLine-${ind}`}><a href={`#${urlPath}`}>{label}</a></nav>
          )
        })}
      </header>
      <section>
        <div id="name">
          <span>{name}</span>
        </div>
        <div id="separator"></div>
        <div id="short-description">
          <span>{shortDescription}</span>
        </div>
      </section>
    </div>
  );
}
export default Home;
