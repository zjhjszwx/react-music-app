import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//自定义
import { Content } from "./style";
import * as actionTypes from "./store/actionCreators";
import Slider from "../../components/slider";
import Scroll from "../../baseUI/scroll";
import RecommendList from "../../components/recommendList";
import { forceCheck } from "react-lazyload";

function Recommend(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionTypes.getBannerList());
    dispatch(actionTypes.getRecommendList());
  }, []);

  const list =
    useSelector(state => {
      return {
        bannerList: state.getIn(["recommend", "bannerList"]),
        recommendList: state.getIn(["recommend", "recommendList"])
      };
    }) || {};
  const bannerListJs = list.bannerList ? list.bannerList.toJS() : [];
  const recommendListJs = list.recommendList ? list.recommendList.toJS() : [];

  return (
    <Content>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJs}></Slider>
          <RecommendList recommendList={recommendListJs}></RecommendList>
        </div>
      </Scroll>
    </Content>
  );
}

export default Recommend;
