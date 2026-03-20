import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import AppRouter from './AppRouter'
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from "react-redux";
import { store } from "./store/store.tsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomCursor from './components/CustomCursor.tsx';
import '../src/assets/css/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider> 
          <BrowserRouter> 
            <CustomCursor /> 
            <AppRouter/>
            <ToastContainer 
              position="top-right" 
              autoClose={2000} 
              theme="dark" 
              pauseOnHover={false} 
            />
          </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)