import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../../Redux/actionCreators";
import { BigCard } from "./Cards/BigCard.jsx";
import { NormalCard } from "./Cards/NormalCard";
import { SmallCard } from "./Cards/SmallCard";
import styles from "./HomePage.module.css";

export const HomePage = () => {
    const newsData = useSelector((state) => state.data.newsData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsData());
    }, []);

    console.log(newsData, "DTA");
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
                    
                </div>
            </div>
        </>
    );
};
