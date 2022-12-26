import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://megalab.pythonanywhere.com/",
});

export default customFetch;
