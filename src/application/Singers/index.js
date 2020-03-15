import React, { useState, useEffect, memo } from "react";

import Horizen from "../../baseUI/horizen/index";
import Scroll from "../../baseUI/scroll";
import { ListContainer, List, ListItem } from "./style";
import { getHotSingers, getSingersList } from "./store/actions";
import { useSelector, useDispatch } from "react-redux";

// 歌手种类
export const categoryTypes = [
  {
    name: "华语男",
    key: "1001"
  },
  {
    name: "华语女",
    key: "1002"
  },
  {
    name: "华语组合",
    key: "1003"
  },
  {
    name: "欧美男",
    key: "2001"
  },
  {
    name: "欧美女",
    key: "2002"
  },
  {
    name: "欧美组合",
    key: "2003"
  },
  {
    name: "日本男",
    key: "6001"
  },
  {
    name: "日本女",
    key: "6002"
  },
  {
    name: "日本组合",
    key: "6003"
  },
  {
    name: "韩国男",
    key: "7001"
  },
  {
    name: "韩国女",
    key: "7002"
  },
  {
    name: "韩国组合",
    key: "7003"
  },
  {
    name: "其他男歌手",
    key: "4001"
  },
  {
    name: "其他女歌手",
    key: "4002"
  },
  {
    name: "其他组合",
    key: "4003"
  }
];

// 歌手首字母
export const alphaTypes = [
  {
    key: "A",
    name: "A"
  },
  {
    key: "B",
    name: "B"
  },
  {
    key: "C",
    name: "C"
  },
  {
    key: "D",
    name: "D"
  },
  {
    key: "E",
    name: "E"
  },
  {
    key: "F",
    name: "F"
  },
  {
    key: "G",
    name: "G"
  },
  {
    key: "H",
    name: "H"
  },
  {
    key: "I",
    name: "I"
  },
  {
    key: "J",
    name: "J"
  },
  {
    key: "K",
    name: "K"
  },
  {
    key: "L",
    name: "L"
  },
  {
    key: "M",
    name: "M"
  },
  {
    key: "N",
    name: "N"
  },
  {
    key: "O",
    name: "O"
  },
  {
    key: "P",
    name: "P"
  },
  {
    key: "Q",
    name: "Q"
  },
  {
    key: "R",
    name: "R"
  },
  {
    key: "S",
    name: "S"
  },
  {
    key: "T",
    name: "T"
  },
  {
    key: "U",
    name: "U"
  },
  {
    key: "V",
    name: "V"
  },
  {
    key: "W",
    name: "W"
  },
  {
    key: "X",
    name: "X"
  },
  {
    key: "Y",
    name: "Y"
  },
  {
    key: "Z",
    name: "Z"
  }
];

function Singers() {
  const [category, setCategory] = useState("");
  const [alpha, setAlpha] = useState("");
  const [count, setCount] = useState(10);
  const dispatch = useDispatch();
  const data = useSelector(state => {
    return {
      singers: state.getIn(["singers", "singers"])
    };
  });
  useEffect(() => {
    if (alpha || category) {
      dispatch(getSingersList({ category, alpha, count: count }));
    } else {
      dispatch(getHotSingers(count));
    }
  }, [alpha, category, count]);

  // console.log(category, alpha, data);

  const renderSingerList = () => {
    return (
      <List>
        {data.singers.toJS().map((item, index) => {
          return (
            <ListItem key={item.accountId + "" + index}>
              <div className="img_wrapper">
                <img
                  src={`${item.picUrl}?param=300x300`}
                  width="100%"
                  height="100%"
                  alt="music"
                />
              </div>
              <span className="name">{item.name}</span>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const handlePullUp = () => {
    count < 90 && setCount(count + 10);
  };
  const handlePullDown = () => {
    count > 10 && setCount(count - 10);
  };

  return (
    <div style={{ paddingTop: 10 }}>
      <Horizen
        list={categoryTypes}
        title="分类(默认热门): "
        handleChange={e => {
          setCategory(e);
          setCount(10);
        }}
        value={category}
      />
      <Horizen
        list={alphaTypes}
        title="首字母: "
        handleChange={e => {
          setAlpha(e);
          setCount(10);
        }}
        value={alpha}
      />

      <ListContainer>
        <Scroll pullUp={handlePullUp} pullDown={handlePullDown}>
          {renderSingerList()}
        </Scroll>
      </ListContainer>
    </div>
  );
}

export default Singers;
