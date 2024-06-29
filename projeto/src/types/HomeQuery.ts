/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_movies_image {
  name: string | null;
  url: string;
}

export interface HomeQuery_movies {
  id: string;
  title: string;
  image: HomeQuery_movies_image | null;
  year: number;
  description: string;
  type: string;
  genre: string;
}

export interface HomeQuery {
  movies: HomeQuery_movies[];
}
