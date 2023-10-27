import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchData } from '../redux/slice';


const TestingRedux = () => {
    const dispatch = useDispatch();
    const apiData = useSelector((state)=>state.api.data); //selects data to read from the state that is api here
    const apiStatus = useSelector((state)=>state.api.status);
    const apiError = useSelector((state)=>state.api.error);

    useEffect(()=>{
       dispatch(fetchData());     
    },[dispatch])

    if(apiStatus==='loading')
    {
        return (<div>
            loading ...
        </div>)
    }

    if(apiStatus==='failed')
    {
        return(<div>{apiError}</div>)
    }
console.log(apiData)
  return (
    <div>
     {
      apiData.data.map((value,key)=>(
        <div key={key}>
                {value.visitorName}
        </div>
      ))
     }
    </div>
  )
}

export default TestingRedux