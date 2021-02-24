import React from 'react';
import MoviesList from './MoviesList';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends React.Component {

  state = {
    movies: moviesData,
    title: '',
    director: '',
    hasOscars: false
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    // add this movie to the movies array in state - we have to make sure though that we don't mutate the
    // movies array in state
    // const moviesCopy = this.state.movies.slice();
    // moviesCopy.push(newMovie)
    this.setState((state, props) => ({
      movies: [newMovie, ...state.movies]
      // movies: moviesCopy
    }))
  }

  handleSubmit = event => {
    event.preventDefault();
    // create a new object with the fields from the state -> a new movie object
    // add this obj to the movies array in state
    const { title, director, hasOscars } = this.state;
    console.log(uuidv4());
    const newMovie = {
      title,
      director,
      hasOscars,
      id: uuidv4()
    }
    console.log(newMovie);
    // update the state
    movies: this.state.movies.push(newMovie)
    this.setState(() => ({
      movies: [newMovie, ...this.state.movies],
      title: '',
      director: '',
      hasOscars: false
    }))
  }

  // handleTitleChange = event => {
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  //   // update the state of title
  //   this.setState({
  //     title: event.target.value
  //   })
  // }


  // handleDirectorChange = event => {
  //   console.log(event.target.name);
  //   this.setState({
  //     director: event.target.value
  //   })
  // }

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  handleOscarsChange = event => {
    this.setState({
      hasOscars: event.target.checked
    })
  }

  // handleChange = event => {
  //   // const target = event.target;
  //   const value = event.target.type === 'checked' ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   })
  // }

  render() {
    // const moviesList = this.state.movies.map(movie => (<li key={movie.id}>{movie.title}</li>))
    // console.log(moviesList);
    return (
      <div className="App" >
        <h1>Movies List</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            // onChange={this.handleTitleChange}
            onChange={this.handleChange}
          />
          <label htmlFor="director">Director: </label>
          <input
            type="text"
            name="director"
            id="director"
            value={this.state.director}
            // onChange={this.handleDirectorChange}
            onChange={this.handleChange}
          />
          <label htmlFor="hasOscars">Oscars ?</label>
          <input
            type="checkbox"
            name="hasOscars"
            id="hasOscars"
            checked={this.state.hasOscars}
            // onChange={this.handleOscarsChange}
            onChange={this.handleChange}
          />
          <button type="submit">Add a movie</button>
        </form>

        <button onClick={this.addMovie}>Add the movie Interstellar</button>
        {/* <ul>
          {moviesList}
        </ul> */}
        {/* if there are no movies in the state then display a message*/}
        {this.state.movies.length === 0 && <h2>No movies to display</h2>}
        {/* the movies from the state are passed as a prop to the MoviesList component */}
        <MoviesList movies={this.state.movies} />
      </div >
    );
  }
}

export default App;
