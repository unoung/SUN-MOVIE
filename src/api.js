import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "840b176b5a353d29629ed18b975991ae",
    language: "ko-KR",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  topRated: () => api.get("movie/top_rated"),
  upcoming: () => api.get("movie/upcoming"),
  detail: (id) => api.get(`movie/${id}`),
  video: (id) => api.get(`movie/${id}/videos`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};
