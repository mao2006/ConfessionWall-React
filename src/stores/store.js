// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import tokenReducer from './stores/tokenstore'; 

// 创建 Redux store
const store = configureStore({
    reducer: {
        token: tokenReducer,
    },
});

const persistor = persistStore(store); 

export { store, persistor }; 