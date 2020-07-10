export type Movie = {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  isLiked: boolean;
};

export type Movies = Movie[];
