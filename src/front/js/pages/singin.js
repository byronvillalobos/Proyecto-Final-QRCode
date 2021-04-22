import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Singin = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<form>
				<div className="form-group">
					<label htmlFor="example1">Large input</label>
					<input type="text" id="example1" className="form-control form-control-lg" />
				</div>
				<div className="form-group">
					<label htmlFor="example2">Medium input</label>
					<input type="text" id="example2" className="form-control form-control-md" />
				</div>
				<div className="form-group">
					<label htmlFor="example3">Small input</label>
					<input type="text" id="example3" className="form-control form-control-sm" />
				</div>
			</form>
		</div>
	);
};