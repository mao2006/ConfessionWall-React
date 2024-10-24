import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css';
import AppRouter from './routes/router.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // 导入 PersistGate
import { store, persistor } from './stores/store.js'; 


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <AppRouter />
      </StrictMode>,
    </PersistGate>
  </Provider>
)
