import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNewsData } from "../../Redux/actionCreators";
import { fetchFeatureNewsData } from "../../Redux/FeaturesData/actionCreators";
import { BigCard } from "../HomePageStart/Cards/BigCard";
import { PaginationRounded } from "../Pagination/Pagination";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';




const FeaturedNews=()=>{
    const featureNewsData = useSelector((state)=>state.featurenews.featureNews)
    const dispatch = useDispatch()
    const [page,setPage] = useState(1)
    const history = useHistory()
    const [limit,setLimit] = useState(4)
    const [sort,setSort] = useState(null)
    const [date,setDate] = useState("all")

    const handleChange = (event) => {
        setSort(event.target.value);
      };


    const handleDate=(e)=>{
        let value = e.target.value;
        // value = [...value].reverse().join("")
        let [y,m,d] = value.split("-")
        console.log(y,m,d)
        let finalvalue = [d,m,y].join("-")
        console.log(finalvalue,"Final")
       
        console.log(value)
       // console.log(copy,"Copy")
        setDate(finalvalue)
        console.log(e.target.value)
    }
    
    useEffect(()=>{
       dispatch(fetchFeatureNewsData())
    
    },[])
    const goToDisplayNews = (id,data) =>{
        const location = {
            pathName: `/featured-news/${id}`,
            state:{
                data:data
            }
        }
        console.log(location,"loc")
        history.push( location.pathName )
    }
    //console.log(newsData)
    const totalcount = Math.ceil(featureNewsData && featureNewsData.length / limit)

    const handlePageChange = (event,value) =>{
        setPage(value)
    }
    return(
        <div style = {{display:"flex",width:"700px", margin:"auto" , flexDirection:"column"}}>
            <br></br>
            <div style = {{width:"400px", display:"flex",justifyContent:"space-between",margin:"auto"}}>
                <div>
            <InputLabel id="demo-simple-select-label">Sort Alphabeticaly</InputLabel>
        <Select
    
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          onChange={handleChange}
        >
         <option value="az">A-Z</option>
          <option value="za">Z-A</option>
         
        
        </Select>
        </div>
        <div>
        <TextField
        onChange = {handleDate}
        id="date"
        label="Filter By Date"
        type="date"
        defaultValue="2021-02-05"
        
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
        </div>
           
           
            {featureNewsData?.filter((item) => {
                    if(date === "all"){
                        return true
                    }
                    return date === item.published_at
                }).sort((a, b) => {
                    if (sort === null) {
                    return 0;
                    }
                    if (sort === "az") {
                    return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                    } else if (sort === "za") {
                    return b.title.toLowerCase().localeCompare(a.title.toLowerCase())
                    }
                }).filter((_,index)=> index >= (page - 1)  * limit && index < page * limit).map(item => {
                return <BigCard key = {item.id} data = {item}  goToDisplayNews = {  goToDisplayNews } />
            })}
            <div style = {{height:"70px"}}></div>
            <PaginationRounded total = {totalcount}
            page = {page}
            handlePageChange = {handlePageChange} />


        


        </div>
    )
}
export {FeaturedNews}