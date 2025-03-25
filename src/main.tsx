import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './views/App/App.tsx'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './data/store/store.ts'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    
    <PersistGate loading={null} persistor={persistor}>

      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
      
    </PersistGate>

  </Provider>
)
