import styled from "styled-components";
import style from "../../assets/global-style";

export const ListWrapper = styled.div`
  .title {
    font-size: 14px;
    padding-left: 6px;
    font-weight: 700;
    line-height: 40px;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ListItem = styled.div`
  width: 32%;
  padding: 2px;
  .img_wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
    width: 100%;
    .decorate {
      position: absolute;
      top: 0;
      height: 35px;
      border-radius: 3px;
      width: 100%;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla(0, 0%, 100%, 0));
      z-index: 1;
    }
    .play_count {
      position: absolute;
      top: 2px;
      right: 2px;
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-light"]};
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 50px;
    text-align: left;
    font-size: ${style["font-size-s"]};
    color: ${style["font-color-desc"]};
    line-height: 1.4;
  }
`;
