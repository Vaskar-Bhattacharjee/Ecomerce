import { configureStore } from '@reduxjs/toolkit'
import { HatbazarSlice } from './HatbazarSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'root', // Key for localStorage
  storage,     // Storage engine (localStorage)
  // Optional: Whitelist reducers you want to persist
  // whitelist: ['Hatbazar'], 
};
const persistedReducer = persistReducer(persistConfig, HatbazarSlice.reducer);
export const store = configureStore({
  reducer: {
    Hatbazar: persistedReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
