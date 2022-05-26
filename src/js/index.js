//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function counter(props) {
	return (
		<div className="SecCounter">
			<diV className="clock">
				<i class="fa-light fa-clock"></i>
			</diV>
			<div className="Cmil"></div>
			<div className="Dmil"></div>
			<div className="Umil"></div>
			<div className="centena"></div>
			<div className="decena"></div>
			<div className="Unidad"></div>
		</div>
	);
}

//render your react application
ReactDOM.render(<counter />, document.querySelector("#app"));
