const { createSlice, createAsyncThunk, isRejectedWithValue } = require('@reduxjs/toolkit')
const fetchData = createAsyncThunk('api/fetchData',async(_,{rejectedWithValue}) => {
    try {
        
    } catch (error) {
        
    }
})
const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        status: 'Initial state', //Empty State
        error: null
    },
    reducers:{},
    extraReducers: (response)=> //response is a prop
    {
        response
        .addCase(fetchData.pending,(state)=>{
          state.status = 'loading ....'              
        })
        .addCase(fetchData.fulfilled,(state)=>{
            state.status = "data loaded successfully"
        })
        .addCase(fetchData.rejected,(state)=>{
            state.status = "Data rendering rejected"
        })
    },
});

export default apiSlice.reducer