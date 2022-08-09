import { useEffect, useState } from 'react';
import movieDB from '../api/movieDb';
import { MovieInterfaceResponse, Movie } from '../interface/movieInterface';
interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {
    const [isLoad, setIsLoad] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {
        const nowPlayingPromise =
            movieDB.get<MovieInterfaceResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieInterfaceResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieInterfaceResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieInterfaceResponse>('/upcoming');

        const respAll = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMoviesState({
            nowPlaying: respAll[0].data.results,
            popular: respAll[1].data.results,
            topRated: respAll[2].data.results,
            upcoming: respAll[3].data.results,
        });

        setIsLoad(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return { ...moviesState, isLoad };
};
