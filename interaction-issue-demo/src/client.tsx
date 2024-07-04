import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import './global.css';
import '@razorpay/blade/fonts.css';


ReactDOM.hydrateRoot(document.querySelector("#root")!, (
  <BrowserRouter>
    <App />
  </BrowserRouter>)
);
