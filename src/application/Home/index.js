import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Top, Tab } from "./style";
import { NavLink } from "react-router-dom";

function Home(props) {
  console.log("home", props);
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <span>推荐</span>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <span>歌手</span>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <span>排行</span>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default memo(Home);
