import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Poster from "../components/Poster";
import { Movies, Movie } from "../types";

const GET_MOVIES = gql`
  query Movies {
    movies {
      id
      original_title
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, data } = useQuery<{ movies: Movies }>(GET_MOVIES);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data?.movies.map((movie: Movie) => (
          <Poster key={movie.id} {...movie}>
            {movie.original_title}
          </Poster>
        ))
      )}
    </>
  );
};

export default Home;
