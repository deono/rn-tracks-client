import axios from "axios";

export default axios.create({
  // ngrok testing url changes every 8 hours
  // restart the server and change the baseURL here
  baseURL: "http://9bca74f2.ngrok.io"
});
