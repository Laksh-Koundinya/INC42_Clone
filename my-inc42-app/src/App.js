import React ,{useEffect} from "react"
import {useDispatch} from "react-redux"
import { HomePage } from './Components/HomePageStart/HomePage';
import { getNewsData } from './Redux/actionCreators';
import { Routes } from "./Routes/Routes";


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
        
    dispatch( getNewsData() )
  }, [])

  return (
    <div >
      <Routes/>
    </div>
  );
}

export default App;
