import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

// Import Component
import Navbar from "./components/Navbar/Navbar";
import Git from "./pages/Git/Git";
import Figma from "./pages/Figma/Figma";
import Html from "./pages/HTML/Html";
import Css from "./pages/CSS/Css";
import Bootstrap from "./pages/Bootstrap/Bootstrap";
import Javascript from "./pages/Javascript/Javascript";
import CleanCode from "./pages/CleanCode/CleanCode";
import UIUX from "./pages/UIUX/UIUX";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Provider store ={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar/>
              <div className="container">
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/git" element={<Git />} />
                  <Route path="/uiux" element={<UIUX />} />
                  <Route path="/figma" element={<Figma/>}/>           
                  <Route path="/html" element={<Html/>} />            
                  <Route path="/css" element={<Css/>}/>           
                  <Route path="/bootstrap" element={<Bootstrap/>}/>           
                  <Route path="/javascript" element={<Javascript/>}/>           
                  <Route path="/cleancode" element={<CleanCode/>}/>           
                </Routes>
              </div>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

// Nabvar Sticky 
