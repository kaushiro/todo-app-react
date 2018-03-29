import React from "react";
import ReactDOM from "react-dom";



import { Provider } from "react-redux";

// import the Router component

import { BrowserRouter as Router } from "react-router-dom";

// import the App component
import App from "./App";


import { store } from './Data/store';


// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);
