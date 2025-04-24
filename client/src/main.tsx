
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor  } from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import  analytics  from './firebase/config'
import './'
import App from './App.tsx'
import { createContext } from 'react'
export const AnalyticsContext = createContext(analytics)

createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AnalyticsContext.Provider value={analytics}>
        <App />
      </AnalyticsContext.Provider>
      </PersistGate>
    </Provider>

)
