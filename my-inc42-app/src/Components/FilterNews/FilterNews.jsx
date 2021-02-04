import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { filterNews } from "../../Redux/FilterData/actionCreators";
import { BigCard } from "../HomePageStart/Cards/BigCard";

import styles from "./filterPage.module.css";

import { PaginationRounded } from "../Pagination/Pagination";



export const FilterNews = () => {
    const data = useSelector((state) => state.filterData.filteredData);
    const loading = useSelector((state) => state.filterData.loading);
    const error = useSelector((state) => state.filterData.error);
    const [page, setPage] = useState(1);
    const [start, setStart] = useState(0);

    const [limit, setLimit] = useState(6);

    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = params;

    const goToDisplayNews = (id, data) => {
        const location = {
            pathName: `/news-details/${id}`,
            state: {
                data: data,
            },
        };
        history.push(location.pathName);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
        console.log(value, "padefefre");
    };
    useEffect(() => {
        console.log(id, "labellls");
        dispatch(filterNews(id));
        setStart((page - 1) * limit);
    }, []);

    const totalPages = Math.ceil( data && data.length /limit)

    return (
        <>
            <div className={styles.filterNewsCards}>
                {data
                    ?.filter(
                        (_, index) =>  index >= (page - 1) * limit && index < (page * limit)
                    )
                    .map((item) => {
                        return (
                            <BigCard
                                data={item}
                                key={item.id}
                                goToDisplayNews={goToDisplayNews}
                            />
                        );
                    })}
            </div>
            {loading === false && error === false && (
                <div className={styles.filterNewsCards}>
                    {
                        <PaginationRounded
                            handlePageChange ={handlePageChange}
                            page={page}
                            total = {totalPages}
                            limit={limit}
                            data={data}
                        />
                    }
                </div>
            )}
        </>
    );
};


