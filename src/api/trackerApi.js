import axios from "axios";

export default axios.create({
  // ngrok testing url changes every 8 hours
  // restart the server and change the baseURL here
  baseURL: "http://4af6c375.ngrok.io"
});
