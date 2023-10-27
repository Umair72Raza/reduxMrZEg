import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const fetchData = createAsyncThunk('api/fetchData',async(_,{rejectWithValue}) => {
    try {
        const data = await axios.get('http://localhost:8000/visitor/getvisitors')
        console.log(data);
        return data;
    } catch (error) {
        return rejectWithValue(error) //pass error to the reject of promise
    }
})
const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [], //it is a state
        status: 'Initial state', //Empty State
        error: null
    },
    reducers:{},
    extraReducers: (response)=> //response is a prop
    {
        response
        .addCase(fetchData.pending,(state)=>{
        
          state.status = 'loading'              
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status = "data loaded successfully"
            state.data = action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
        
            state.status = "Data rendering rejected"
            state.error = action.payload
        })
    },
});

export default apiSlice.reducer