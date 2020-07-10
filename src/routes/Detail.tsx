import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Movie, Movies } from "../types";
import { useParams } from "react-router-dom";

export const GET_MOVIE = gql`
  query Movie($id: Int!) {
    movie(id: $id) {
      id
      original_title
      poster_path
      overview
      isLiked @client
    }
    recommendations(id: $id) {
      id
      original_title
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<{ movie: Movie; recommendations: Movies }>(
    GET_MOVIE,
    {
      variables: { id: parseInt(id) },
    }
  );
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <span>{`${data?.movie.original_title} ${
            data?.movie.isLiked ? "💖" : "💔"
          }`}</span>
          <div>
            {data?.recommendations.map((recommendation) => (
              <div key={recommendation.id}>{recommendation.original_title}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
