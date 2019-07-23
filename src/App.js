import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EpisodeDetails from "./components/episodes/EpisodeDetails";
import Home from "./components/Home";
import "./scss/main.scss";
import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from './layout/Footer';
import Search from "./components/Search";
import PodcastDetails from "./components/podcasts/PodcastDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className= "main-container">
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route path="/search/episodes/:id" component={EpisodeDetails} />
            <Route path="/search/podcasts/:id" component= {PodcastDetails} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
