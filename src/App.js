import Header from "./shared/Header";
import MoviesList from "./home/MoviesList";
import DetailedMoviesList from "./movies/DetailedMoviesList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MoviesList />
        </Route>
        <Route exact path="/movies">
          <DetailedMoviesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;