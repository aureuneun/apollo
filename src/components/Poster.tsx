import React from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const TOGGLE_LIKED = gql`
  mutation ToggleLiked($id: Int!, $isLiked: Boolean!) {
    toggleLiked(id: $id, isLiked: $isLiked) @client
  }
`;

const Poster = ({
  id,
  original_title,
  isLiked,
}: {
  children: string;
  key: number;
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  isLiked: boolean;
}) => {
  const [toggleLiked] = useMutation(TOGGLE_LIKED, {
    variables: { id, isLiked },
  });
  return (
    <div>
      <Link to={`/${id}`}>{original_title}</Link>
      <button onClick={() => toggleLiked()}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Poster;
