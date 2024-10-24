import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'token', // 存储的键名
    storage, // 使用本地存储
};

const tokenSlice = createSlice({
    name:'token',
    initialState:{token:''}, //初始值
    reducers:{ //类似pinia的action
        update:(state,newVal) => {
            state.token = newVal
        }
    }
})

const tokenReducer = persistReducer(persistConfig,tokenSlice.reducer)

export default tokenReducer //必须导出

export const {update} = tokenSlice.actions
