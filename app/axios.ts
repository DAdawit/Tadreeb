import axios from "axios";

const api = axios.create({
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: "https://tadreeb.mozivol.com/api",
});
let token = null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
