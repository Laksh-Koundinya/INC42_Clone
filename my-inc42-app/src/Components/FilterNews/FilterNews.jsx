import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";

import { filterNews } from "../../Redux/actionCreators";
import { NormalCard } from "../HomePageStart/Cards/NormalCard";

export const FilterNews = () => {
    const data= useSelector(state => state.data.newsData)
    const params = useParams();
    const dispatch = useDispatch();

    const { id } = params;

    useEffect(() => {
        dispatch(filterNews(id));
    }, []);

    return <div>
        {
            data?.map( (item) => {
                return <NormalCard data = {item} key = {item.id} />
            })

        }
    </div>;
};
