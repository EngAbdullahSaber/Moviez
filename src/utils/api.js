import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzA3YTMyODFhMzNjMzQyODIwYWQzZThmZDkwYTU4NSIsInN1YiI6IjY1NmE2ZTQ0NTY4NDYzMDE1MTYyYWQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NNOriSKmgtLdGIk0ZZ1ITWUq0PTvwuEIuOnW5bB-gJU";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
