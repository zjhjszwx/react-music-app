import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/request";
import { fromJS } from "immutable";

export const getHotSingers = param => {
  return dispatch => {
    getHotSingerListRequest(param)
      .then(data => {
        dispatch({
          type: "Singers_singers",
          data: fromJS(data.artists || [])
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const getSingersList = param => {
  return dispatch => {
    getSingerListRequest(param)
      .then(data => {
        dispatch({
          type: "Singers_singers",
          data: fromJS(data.artists || [])
        });
      })
      .catch(e => {
        console.log(e);
      });
  };
};
