import React from "react";
import { Route, Switch } from "react-router-dom";

import Consumption from "./page/consumption";
import Fill from "./page/fill";
import Item from "./page/item";
import Index from "./page/index";
import Statistic from "./page/statistic";

const S = () => {
  return (
    <Switch>
      <Route path="/item">
        <Item />
      </Route>
      <Route path="/fill">
        <Fill />
      </Route>
      <Route path="/consumption">
        <Consumption />
      </Route>
      <Route path="/statistic">
        <Statistic />
      </Route>
      <Route exact={true} path="/">
        <Index />
      </Route>
    </Switch>
  );
};

export default S;
