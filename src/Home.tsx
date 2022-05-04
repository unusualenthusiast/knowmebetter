import React from 'react';
import CareerTimeLineContent from './CareerTimeLineContent';
import { timeLineData, techStackData } from './constants';
import './Home.css';
import Timeline from './Timeline';
import TechStack from './TechStack';

function Home() {
  const name = "Allan M. Valooran";  
  return (
    <main className="home-wrapper">
      <div id="home">
        <header>
          <nav><a href="#contact">Contact</a></nav>
          <nav><a href="#tech-stack">Tech Stack</a></nav>
          <nav><a href="#career">Career</a></nav>
        </header>
        <section>
          <div id="name">
            <span>{name}</span>
          </div>
          <div id="separator"></div>
          <div id="short-description">
            <span>I am a full stack developer</span>
          </div>
        </section>
      </div>
      <div id="career">
        <header>
          <span>Career</span>
        </header>
        <Timeline data={timeLineData} renderComponent={CareerTimeLineContent} />
      </div>
      <div id="tech-stack">
        <header>
          <span>Tech Stack</span>
        </header>
        <TechStack data={techStackData} />
      </div>
      <div id="contact"></div>
    </main>
  );
}
export default Home;