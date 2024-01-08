import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_API_URL, API_KEY } from '../constants/apiEndpoints';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
    endpoints: (build) => ({
        getMovieByGenre: build.query({
            query: (genreId: number) =>
                `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=vi-VN&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
        }),
        getMovieTrendding: build.query({
            query: () => `/trending/movie/day?api_key=${API_KEY}&language=vi-VN`,
        }),
        getMovieVideo: build.query({
            query: (movieId: number) =>
                `/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
        }),
        getMovieDetail: build.query({
            query: (movieId: number) => `/movie/${movieId}?api_key=${API_KEY}&language=vi-VN`,
        }),
        getMovieGenre: build.query({
            query: () => `/genre/movie/list?language=vi&api_key=${API_KEY}`,
        }),
        getMovieByCurrentPageAndGenre: build.query({
            query: ({ currentPage, genreId }: { currentPage: number; genreId: number }) =>
                `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=vi-VN&page=${currentPage}&sort_by=popularity.desc&with_genres=${genreId}`,
        }),
        getMovieSearch: build.query({
            query: ({
                currentPage,
                searchParam,
            }: {
                currentPage: number;
                searchParam: string | null;
            }) =>
                `/search/movie?api_key=${API_KEY}&query=${searchParam}&include_adult=false&language=en-US&page=${currentPage}`,
        }),
        getMovieSortBy: build.query({
            query: (sortBy: string) =>
                `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=10&sort_by=${sortBy}`,
        }),
    }),
});

export const {
    useGetMovieByGenreQuery,
    useGetMovieTrenddingQuery,
    useGetMovieVideoQuery,
    useGetMovieDetailQuery,
    useGetMovieGenreQuery,
    useGetMovieByCurrentPageAndGenreQuery,
    useGetMovieSearchQuery,
    useGetMovieSortByQuery,
} = movieApi;
