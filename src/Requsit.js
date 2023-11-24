export const key = "24f044a2c7899af7750d4c048918c861";

const requsits = {
  requsitPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requsitTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requsitTrending: `https://api.themoviedb.org/3/movie/trend?api_key=${key}&language=en-US&page=2`,
  requsitTv: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  requsitUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requsits;
