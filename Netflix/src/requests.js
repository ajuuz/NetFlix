const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {

    // new and popular
    fetchNowPlaying:`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1'`,
    fetchPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    // tv
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTvWarAndPolitics:`/discover/tv?api_key=${API_KEY}&with_genres=10768&language=en`,
    fetchTvNews:`/discover/tv?api_key=${API_KEY}&with_genres=10763&language=en`,
    fetchTvKids:`/discover/tv?api_key=${API_KEY}&with_genres=10762&language=en`,
    fetchTvReality:`/discover/tv?api_key=${API_KEY}&with_genres=10764&language=en`,


// movies
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchActionHindiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_original_language=hi`,

    apiKey:API_KEY
}
// https://api.themoviedb.org/3`

export default requests;