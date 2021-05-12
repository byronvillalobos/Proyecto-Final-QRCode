import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { Context } from "../../store/appContext";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Fab from "@material-ui/core/Fab";
import { green } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	grow: {
		flexGrow: 1
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		// width: 500,
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			// width: 'auto',
			width: 800
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: 700
		}
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex"
		}
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	}
}));

export default function PrimarySearchAppBar() {
	const { store, actions } = useContext(Context);
	const [searchPerson, setSearchPerson] = useState("");
	const classes = useStyles();
	const history = useHistory();
	const inputSearchRef = useRef(null);

	useEffect(() => {
		inputSearchRef.current.focus();
	}, []);

	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.search}>
						<input
							ref={inputSearchRef}
							onChange={event => {
								setSearchPerson(event.target.value);
							}}
							type="text"
							className="form-control"
							placeholder="Buscar persona..."
							aria-label="Search Person"
							name="SearchPerson"
							id="SearchPerson"
						/>
					</div>
					<div className={classes.grow} />
					<Tooltip title="Crear Persona" aria-label="Crear Persona">
						<NavLink to={`/dashboard/person/detail/`}>
							<button className="btn btn-success">
								<i className="fas fa-plus"></i> Crear persona
							</button>
						</NavLink>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</div>
	);
}
