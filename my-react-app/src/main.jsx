import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Anna, { Darling } from './Anna'
import TopNav from './Components/Topnav'
import 'bootstrap/dist/css/bootstrap.min.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <Anna />
      <Darling />
      <App /> */}
      <TopNav />

    </>
  </StrictMode>
);
