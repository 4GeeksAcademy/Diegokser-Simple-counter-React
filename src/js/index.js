//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let value = 0;

    setInterval(() => {
        const six = Math.floor(value/100000);
        const five = Math.floor(value/10000);
        const four = Math.floor(value/1000);
        const three = Math.floor(value/100);
        const two = Math.floor(value/10);
        const one = Math.floor(value/1)
        value ++;
        
ReactDOM.render(
            <Home  digitOne={one%10} digitTwo={two%10} digitThree={three%10} digitFour={four%10} digitFive={five%10} digitSix={six%10}/>,
            document.querySelector('#app')
           );   
         }, 1000)


