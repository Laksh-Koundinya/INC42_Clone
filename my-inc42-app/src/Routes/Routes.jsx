import React from "react";
import { Route } from "react-router-dom";
import { DisplayNews } from "../Components/DisplayNews/DisplayNews";

import { FilterNews } from "../Components/FilterNews/FilterNews";
import { HomePage } from "../Components/HomePageStart/HomePage";

export const Routes = () => {
    return (
        <div>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/news-details/:id" render={() => <DisplayNews />} />


            <Route exact path="/tags/:id" render={() => <FilterNews />} />
        </div>
    );
};
