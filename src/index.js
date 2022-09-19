import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./index.css"

function App() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

ReactDOM.render(
    <App />, document.querySelector("#root"))