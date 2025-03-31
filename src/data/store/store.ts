import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from '../../data/slices/userSlice'
import wrodsSlice from '../slices/wordsSlice'

const rootRedusers = combineReducers({
    user: userSlice,
    words: wrodsSlice,
})

const persistConfig = {
    key: "words",
    storage
}

const persistedReduser = persistReducer(persistConfig, rootRedusers)

export const store = configureStore({
    reducer: persistedReduser,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }), 
    devTools: true,
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootRedusers>;
export type AppDispatch = typeof store.dispatch;