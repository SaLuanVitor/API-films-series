import React from "react";
import axios from "axios";

const seriesAPi = axios.create({
  baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=0a6998c77885edae013003e7b023fc4c&language=pt-BR&page=1`
});

export default class Series extends React.Component {
  state = {
    series: []
  };
  addSeries = async () => {
    const response = await seriesAPi.get();
    const info = response.data.results.map((item) => {
      return {
        ...item
      };
    });
    console.log(response);
    this.setState({
      series: info
    });
  };
  componentDidMount() {
    this.addSeries();
  }

  render() {
    return (
      <div>
        <h2>Popular TV Series</h2>
        <ol>
          {this.state.series.map((item) => (
            <>
              <li>{item.name}</li>
              <p>{item.data}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                alt=""
              />
              <p>{item.sinopse}</p>
            </>
          ))}
        </ol>
      </div>
    );
  }
}
