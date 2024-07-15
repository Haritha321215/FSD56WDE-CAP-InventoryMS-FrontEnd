import axios from "axios";

// define the base url for the API
const baseURL = "https://fsd56wde-cap-inventoryms-backend.onrender.com/api";
// const baseURL = "http://localhost:3001/api";

// create an instance of axios
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export { instance, protectedInstance };
