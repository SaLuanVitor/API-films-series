import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomePage.js";
import Films from "./components/Filmes.js";
import Series from "./components/Series.js";
import Error from "./components/Error.js";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h2>API Test</h2>
        <ol type="A">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/films">FILMS</Link>
          </li>
          <li>
            <Link to="/series">SERIES</Link>
          </li>
        </ol>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/series" element={<Series />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
}
