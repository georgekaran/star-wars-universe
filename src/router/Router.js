import React from "react";
import { BrowserRouter as ReactRouter, Switch, Route } from "react-router-dom";

import MoviesList from "app/Movies/MoviesList.js";
import Movie from "app/Movies/Movie.js";
import Planets from "app/Planets/Planets.js";
import Characters from "app/Characters/Characters.js";
import Home from "app/Home/Home";
import NotFound from "app/NotFound/NotFound";
import Header from "components/Header/Header";
import HeaderItem from "components/Header/HeaderItem";
import Logo from "components/Logo/Logo";

export default function Router() {
  return (
    <ReactRouter>
      <Header>
        <HeaderItem id="logo" to="/" style={{ display: "flex", margin: "0 auto" }}>
          <Logo />
        </HeaderItem>
        <HeaderItem title="Filmes" to="/movies" />
        <HeaderItem title="Planetas" to="/planets" />
        <HeaderItem title="Personagens" to="/characters" />
      </Header>
      <div style={{ marginTop: 70 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route exact path="/movies">
            <MoviesList />
          </Route>
          <Route path="/movies/:id">
            <Movie />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </ReactRouter>
  );
}
