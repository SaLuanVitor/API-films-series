import React from "react";
import axios from "axios";

const FilmAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=0a6998c77885edae013003e7b023fc4c&language=en-US&page=1`
});

export default class App extends React.Component {
  state = {
    movies: []
  };

  addFilms = async () => {
    const response = await FilmAPI.get();
    const api = response.data.results.map((item) => {
      return {
        ...item
      };
    });
    this.setState({
      movies: api
    });
  };

  componentDidMount() {
    this.addFilms();
  }

  render() {
    return (
      <div>
        <h2>Popular Movies</h2>
        <ol>
          {this.state.movies.map((item) => (
            <>
              <li>{item.title}</li>
              <p>Lançamento: {item.release_date}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                alt=""
              />
              <p>Sinopse:</p>
              <p>{item.overview}</p>
            </>
          ))}
        </ol>
      </div>
    );
  }
}
