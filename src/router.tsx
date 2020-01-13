import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "./page/index";
import PostPage from "./page/postPage";
import User from "./page/user";

const S = () => {
  return (
    <Switch>
      <Route path="/post">
        <PostPage />
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
