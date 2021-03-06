import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"

import { getNewsData } from "../../Redux/actionCreators";
import { BigCard } from "./Cards/BigCard.jsx";
import { NormalCard } from "./Cards/NormalCard";
import { SmallCard } from "./Cards/SmallCard";
import { Tag } from "./Tag";

import { Typography } from "@material-ui/core";
import styles from "./HomePage.module.css";
import { FeaturedStories } from "./FeaturedStories";
import CircularProgress from '@material-ui/core/CircularProgress';


export const HomePage = () => {
    const newsData = useSelector((state) => state.data.newsData);
    const error = useSelector((state) => state.data.error);
    const loading = useSelector((state) => state.data.loading);


    const dispatch = useDispatch();
    const history = useHistory()


    

    const goToFilterPage = (label) => {
        console.log(label,"label")
        history.push(`/tags/${label}`)
    }

    useEffect(() => {
        dispatch(getNewsData());
    }, []);

    const goToDisplayNews = (id,data) =>{
        const location = {
            pathName: `/news-details/${id}`,
            state:{
                data:data
            }
        }
        console.log(location,"loc")
        history.push( location.pathName )
    }

    console.log(newsData, "DTA");
    console.log(newsData, "filtered")
    return (
        <>
            <div className={styles.mainHeader}>
            { loading && <div className={styles.loading}><CircularProgress disableShrink /></div> }
                {error && <div>something went wrong</div>}
                <div className={styles.mainTop}>
                
                    <div className={styles.mainLeft}>
                        <div className={styles.leftCard}>
                            {newsData?.reverse().map((item, i) => {
                                if (i === 0) {
                                    return (
                                        <BigCard data={item} key={item.id} goToDisplayNews = {  goToDisplayNews } />
                                    );
                                }
                            })}
                        </div>
                        <div className={styles.twoCards}>
                            {newsData?.reverse().map((item, i) => {
                                if (i >= 1 && i <= 2) {
                                    return (
                                        <NormalCard data={item} key={item.id} goToDisplayNews = {  goToDisplayNews }/>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className={styles.rightCard}>
                        <Typography variant="h4" style = {{ textAlign:"start"}}>Editors picks</Typography>
                        {newsData?.reverse().map((item, i) => {
                            if (i > 2 && i <= 7) {
                                return <SmallCard data={item} key={item.id} goToDisplayNews = {  goToDisplayNews } />;
                            }
                        })}
                    </div>
                </div>
                <div style = {{height:"40px"}}></div>
               <div className = {styles.tags}>
                    {
                        ["Education","Technology","Health"]?.map((item,index) => {
                            return <Tag label = {item} key = {index} handleClick = { goToFilterPage} />
                        })
                    }
                </div>
                <div style = {{height:"40px"}}></div>
                <FeaturedStories data = {newsData} />
                    {console.log(loading, error, "errorrr")}
                
            </div>
        </>
    );
};
