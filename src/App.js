import React from "react";
import './App.css'
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar";
import AppRouter from "./components/UI/AppRouter";


function App() {

    return (
        <div className='wrapper'>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>

        </div>
    );
}

export default App;
