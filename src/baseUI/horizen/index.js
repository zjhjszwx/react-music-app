import React, { useEffect, useRef } from "react";
import Scroll from "../scroll";
import styled from "styled-components";
import style from "../../assets/global-style";
const List = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  > span:first-of-type {
    color: #aaa;
    flex: 0 0 auto;
    padding: 5px;
  }
`;
const ListItem = styled.span`
  padding: 2px 8px;
  flex: 0 0 auto;
  border-radius: 10px;
  display: inline-block;
  &.actived {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`;

function Horizen(props) {
  const { list, title, handleChange, value } = props;
  let ele = useRef(null);

  useEffect(() => {
    let categoryDOM = ele.current;
    let tags = categoryDOM.querySelectorAll("span");
    let width = 0;
    tags.forEach(i => {
      width += i.offsetWidth;
    });
    categoryDOM.style.width = `${width}px`;
  }, []);
  return (
    <Scroll direction={"horizental"}>
      <div ref={ele}>
        <List>
          <span>{title}</span>
          {list.map(item => {
            return (
              <ListItem
                key={item.key}
                onClick={() => handleChange(item.key)}
                className={value == item.key ? "actived" : ""}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
}

export default Horizen;
