import axios from "axios";

const options = {
  params: {
    part: "snippet",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "a615b4316bmshcc6192b8992a199p175f50jsn5af692bf7190",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const ApiService = {
  async getData(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};
export default ApiService;
