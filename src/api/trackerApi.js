import axios from "axios";

export default axios.create({
  // ngrok testing url changes every 8 hours
  // restart the server and change the baseURL here
  baseURL: "http://00d2f4fd.ngrok.io"
});
