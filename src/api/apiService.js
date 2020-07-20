import axios from "axios";

const ApiService = {
  init() {
    axios.defaults.baseURL = "https://api.covid19api.com/";
    axios.defaults.headers.common.Accept = "application/json";
  },
  fetch(resource, params) {
    return axios.get(resource, params);
  },
  get(resource) {
    return axios.get(resource);
  }
};

export default ApiService;
