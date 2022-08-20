import React from 'react';
import './App.css';
import Row from "./Row";
import Nav from "./Nav";
import Banner from './Banner';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLarge={true} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
