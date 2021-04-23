import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 imgmain-class">
			<h1>Hello Rigo!</h1>
			<p>
				<img src="" />
			</p>
		</div>
	);
};
