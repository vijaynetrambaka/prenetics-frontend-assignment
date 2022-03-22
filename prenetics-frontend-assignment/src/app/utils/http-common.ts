import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/test/v1.0/org/",
  headers: {
    "Content-type": "application/json"
  }
});
//b3c1ae3d-1bf1-4b32-a2a1-189387e1aa38/sample