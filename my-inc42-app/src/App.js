import React ,{useEffect} from "react"
import {useDispatch} from "react-redux"
import './App.css';
import LoginModal from "./Components/Login_Signup/LoginModal"
import { HomePage } from './Components/HomePageStart/HomePage';
import { getNewsData } from './Redux/actionCreators';
import { Routes } from "./Routes/Routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsData());
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
