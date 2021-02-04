import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Route } from "react-router-dom";
import { DisplayNews } from "../Components/DisplayNews/DisplayNews";
import { FilterNews } from "../Components/FilterNews/FilterNews";
import { HomePage } from "../Components/HomePageStart/HomePage";

export const Routes = () => {
    return (
        <div>
            <Navbar />
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/news-details/:id" render={() => <DisplayNews />} />
            <Route exact path="/tags/:id" render={() => <FilterNews />} />
            {/* <Footer /> */}
        </div>
    );
};

