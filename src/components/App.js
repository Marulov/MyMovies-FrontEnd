import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import NavBar from "./NavBar";

import axios from "axios"; // axios paketini import ettik(get,post,delete gibi http istekleri için gerekli)
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Router vermek için gerekli olan import


class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };


  componentDidMount() {
    this.getMovies()
  }

  // GET MOVİE
  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });
  }

  // DELETE MOVİE
  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  // SEARCH MOVİE
  searchMovie = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  // ADD MOVİE
  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);

    this.setState((state) => ({
      movies: state.movies.concat([movie]),
    }));
    this.getMovies()
  }

  // EDİT MOVİE
  EditMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
    this.getMovies()
  }


  render() {
    // filtre yapma işlemi için
    let filteredMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.name
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
      });

    return (
      <Router>
        <NavBar/>
        <div className="container " style={{ width: "800px" }}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>
                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route
              path="/add"
              exact
              render={({ history }) => (
                <AddMovie
                  onAddMovie={(movie) => {
                    this.addMovie(movie);
                    history.push("/");
                  }}
                />
              )}
            ></Route>

            <Route
              path="/edit/:id"
              exact
              render={(props) => (
                <EditMovie
                  {...props} // id nin yakalanması için gerekli
                  onEditMovie={(id, updatedMovie) => this.EditMovie(id, updatedMovie)}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
