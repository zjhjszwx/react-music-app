import axios from "axios";
// export const baseUrl = "http://localhost:3001";
export const baseUrl = "http://139.196.23.225:8082";

const axiosInstance = axios.create({
  baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };
