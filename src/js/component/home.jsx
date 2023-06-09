import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = (props) => {
	return (
        <div className="container col-9 d-flex bg-black text-white my-5 mx-auto px-auto">
             <div className="icon col-2 text-bg-dark my-5 py-5 ms-auto me-2 px-1 rounded" id="reloj"><i class="fa-regular fa-clock"></i></div>
             <div className="card col-1 text-bg-dark my-5 py-5 mx-2 px-1 rounded" >{props.digitSix}</div>
             <div className="card col-1 text-bg-dark my-5 py-5 mx-2 px-1 rounded" >{props.digitFive}</div>
             <div className="card col-1 text-bg-dark my-5 py-5 mx-2 px-1 rounded" >{props.digitFour}</div>
             <div className="card col-1 text-bg-dark my-5 py-5 mx-2 px-1 rounded" >{props.digitThree}</div>
             <div className="card col-1 text-bg-dark my-5 py-5 mx-2 px-1 rounded" >{props.digitTwo}</div>
             <div className="card col-1 text-bg-dark my-5 py-5 ms-2 me-auto px-1 rounded" >{props.digitOne}</div>
    </div>
    )
}

Home.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number
};

export default Home;
