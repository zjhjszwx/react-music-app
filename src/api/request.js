import { axiosInstance } from "./config";
//推荐轮播图
export const getBannerRequest = () => {
  return axiosInstance.get("/api/banner");
};

//推荐歌单
export const getRecommendListRequest = () => {
  return axiosInstance.get("/personalized");
};

//歌手字母
export const getHotSingerListRequest = options => {
  return axiosInstance.get(`/top/artists?offset=${options}`);
};
//歌手歌单
export const getSingerListRequest = options => {
  console.log("options", options);
  return axiosInstance.get(
    `/artist/list?cat=${
      options.category
    }&initial=${options.alpha.toLowerCase()}&offset=${options.count}`
  );
};
