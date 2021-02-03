
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"

import { filterNews, getNewsData } from "../../Redux/actionCreators";
import { BigCard } from "./Cards/BigCard.jsx";
import { NormalCard } from "./Cards/NormalCard";
import { SmallCard } from "./Cards/SmallCard";
import { Tag } from "./Tag";


import { Typography } from "@material-ui/core";
import styles from "./HomePage.module.css";


export const HomePage = () => {
    const newsData = useSelector((state) => state.data.newsData);

    const dispatch = useDispatch();
    const history = useHistory()


    

    const goToFilterPage = (label) => {
        console.log(label,"label")
        history.push(`/tags/${label}`)
    }

    useEffect(() => {
        dispatch(getNewsData());
    }, []);

    console.log(newsData, "DTA");
    console.log(newsData, "filtered")
    return (
        <>
            <div className={styles.mainHeader}>
                <div className={styles.mainTop}>
                    <div className={styles.mainLeft}>
                        <div className={styles.leftCard}>
                            {newsData?.reverse().map((item, i) => {
                                if (i == 0) {
                                    return (
                                        <BigCard data={item} key={item.id} />
                                    );
                                }
                            })}
                        </div>
                        <div className={styles.twoCards}>
                            {newsData?.reverse().map((item, i) => {
                                if (i >= 1 && i <= 2) {
                                    return (
                                        <NormalCard data={item} key={item.id} />
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div className={styles.rightCard}>
                        <Typography variant="h4">Editors picks</Typography>
                        {newsData?.reverse().map((item, i) => {
                            if (i > 2 && i <= 7) {
                                return <SmallCard data={item} key={item.id} />;
                            }
                        })}
                    </div>
                </div>
                <div className = {styles.tags}>
                    {
                        ["Education","Technology","Health"]?.map((item,index) => {
                            return <Tag label = {item} key = {index} handleClick = { goToFilterPage} />
                        })
                    }
                </div>
            </div>
        </>
    );
};
