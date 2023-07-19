import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/ContactsSlice';
import { authReducer } from './auth/AuthSlice';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';

const authPeristConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
middleware:(getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false
}),
  reducer: {
    auth: persistReducer(authPeristConfig, authReducer),
    contacts: contactsReducer,
  }
});
export const persistor = persistStore(store);
