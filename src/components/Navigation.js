import React, { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../store/actions";

function Navigation() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const movies = useSelector((state) => state.movies);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    console.log("searchable", movies);
    const results = movies.filter((movie) => {
      if (movie.title) {
        return movie.title.toLowerCase().includes(searchTerm);
      } else {
        return movie.name.toLowerCase().includes(searchTerm);
      }
    });
    dispatch(fetchSearchResults(results));
  }, [dispatch, searchTerm, movies]);

  console.log("search result: ", searchResults);

  return (
    <Navbar fixed="top" bg="dark" variant="dark" style={{ position: "sticky" }}>
      <Navbar.Brand>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Hacktiv8Movies
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/favorites">My Favorites</Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Movie Title here..."
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
    </Navbar>
  );
}
export default Navigation;
