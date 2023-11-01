import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID<'gjsdbng');

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
    <App />
  </GoogleOAuthProvider>
);
