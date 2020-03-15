export const api_key = process.env.REACT_APP_API_KEY;

export const url_popular = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&language=es&region=ES&region=ES`;
export const url_terror = `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&with_genres=27&api_key=${api_key}&language=es&region=ES`;
export const url_cinema = `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2023-12-30&api_key=${api_key}&language=es&&region=ES`;
export const url_romantic = `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&with_genres=10749&api_key=${api_key}&language=es&region=ES`;
export const url_mistery = `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&with_genres=9648&api_key=${api_key}&language=es&region=ES`;
export const url_western = `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&with_genres=37&api_key=${api_key}&language=es&region=ES`;

export const url_tv_popular = `https://api.themoviedb.org/3/tv/popular?sort_by=popularity.desc&api_key=${api_key}&language=es&region=ES&region=ES`;
export const url_tv_crime = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&with_genres=80&language=es&region=ES`;
export const url_tv_Scifi= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&with_genres=10765&language=es&region=ES`;
export const url_tv_docu= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&with_genres=99&language=es&region=ES`;
export const url_tv_comedy= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&with_genres=35&language=es&region=ES`;
export const url_tv_romance= `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=popularity.desc&with_genres=10749&language=es&region=ES`;
