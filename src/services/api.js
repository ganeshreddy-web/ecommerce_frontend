import axios from "axios";

const API = axios.create({
  baseURL: "ecommercebackend-production-4bd7.up.railway.app/api"
});

export default API;
