import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./page/index";
import Post from "./page/post";
import User from "./page/user";

const S = () => {
  return (
    <Switch>
      <Route path="/post">
        <Post />
      </Route>
      <Route path="/user">
        <User />
      </Route>
      <Route exact={true} path="/">
        <Index />
      </Route>
    </Switch>
  );
};

export default S;
