import React ,{useEffect} from "react"
import {useDispatch} from "react-redux"
import { HomePage } from './Components/HomePageStart/HomePage';
import { getNewsData } from './Redux/actionCreators';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
        
    dispatch( getNewsData() )
  }, [])

  return (
    <div >
      <HomePage/>
    </div>
  );
}

export default App;
