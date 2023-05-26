import React from "react"; // core react engine
import ReactDOM from "react-dom/client"; // react specific for web development
import "./index.css"; // css file of index.js
import App from "./App"; // App contains thee whole react application.
import reportWebVitals from "./reportWebVitals";

// render our react app into an element with id=root. 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*StrictMode restricts the user in order to avoid errors caused by deprication issues.*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
