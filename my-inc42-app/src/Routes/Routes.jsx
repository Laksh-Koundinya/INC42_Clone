import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Route,Switch } from "react-router-dom";
import { DisplayNews } from "../Components/DisplayNews/DisplayNews";
import { FilterNews } from "../Components/FilterNews/FilterNews";
import { HomePage } from "../Components/HomePageStart/HomePage";
import {AllNews} from "../Components/OnlyNews/AllNews"
import { UserAccount } from "../Components/UserAccountPage/UserAccount";
import { PrivateRoutes } from "./PrivateRoutes";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" render={() => <HomePage />} />
      <Switch>
      <PrivateRoutes exact path="/account" MyComponent = {UserAccount} />

      <Route exact path="/news-details/:id" render={() => <DisplayNews />} />
      <Route exact path="/tags/:id" render={() => <FilterNews />} />
      </Switch>
      <Footer />
    </div>
  );
};
