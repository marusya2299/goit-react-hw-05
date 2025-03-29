import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchArticlesWithTopic = async (search) => {
  const response = await axios.get(`/search/photos?page=1&query=${search}&client_id=k3z-xk5zphxEXmssAOaWbZk3cl4yrk3_Pn8Ws17Kn-U`);
  return response.data.results;
};
