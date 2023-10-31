import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const TestingById = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    if(id){
        
    }
  return (
    <div>
        {
            id
        }
    </div>
  )
}

export default TestingById