import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Clock } from "./Clock.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Clock />
		</div>
	);
};

export default Home;
