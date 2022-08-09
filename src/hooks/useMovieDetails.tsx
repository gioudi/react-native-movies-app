import { useState, useEffect } from 'react';
import movieDB from '../api/movieDb';
import { MovieCredits, MovieFull } from '../interface/movieInterface';

interface MovieDetails {
    isLoading: boolean;
    cast: MovieCredits;
    movieFull: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
    const [movieDetail, setMovieDetail] = useState<MovieDetails>({
        isLoading: true,
        cast: [],
        movieFull: undefined,
    });

    const getMovieDetail = async () => {
        const movieDetailResponse = movieDB.get<MovieFull>(`/${movieId}`);
        const movieCreditResponse = movieDB.get<MovieCredits>(
            `/${movieId}/credits`,
        );
        const [movieDetailResp, movieCreditResp] = await Promise.all([
            movieDetailResponse,
            movieCreditResponse,
        ]);

        setMovieDetail({
            isLoading: false,
            movieFull: movieDetailResp.data,
            cast: movieCreditResp.data.cast,
        });
    };

    useEffect(() => {
        getMovieDetail();
    }, []);

    return {
        ...movieDetail,
    };
};
