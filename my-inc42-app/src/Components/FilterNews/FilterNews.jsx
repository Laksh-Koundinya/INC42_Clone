import React, { useEffect,useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { filterNews } from "../../Redux/actionCreators";
import { BigCard } from "../HomePageStart/Cards/BigCard";

import styles from "./filterPage.module.css";
import { PaginationRounded } from "../Pagination/Pagination";

export const FilterNews = () => {
    const data = useSelector((state) => state.data.newsData);
    const loading = useSelector( state => state.data.loading);
    const error = useSelector( state => state.data.error)
    const results_found = useSelector( state => state.data.results_found)

    const [page,setPage] = useState(1)
    const [start,setStart] = useState(0)

    const [limit,setLimit] = useState(2)

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

    const handlePageChange = (event,value) =>{
        setPage( value)
        console.log(value, "padefefre" )
    }
    useEffect(() => {
        dispatch(filterNews(id,page,limit,start));
        setStart( (page-1)*limit )
    }, [page,limit,start]);

    console.log( data, "dataaa")

    return (
        <>
            <div className={styles.filterNewsCards}>
                {data?.map((item) => {
                    return (
                        <BigCard
                            data={item}
                            key={item.id}
                            goToDisplayNews={goToDisplayNews}
                        />
                    );
                })}
            </div>
            { (loading ===false) && (error ===false) && <PaginationRounded handlePage = {handlePageChange} page = {page} limit = {limit} data = {data} results = {results_found} /> }
        </>
    );
};
