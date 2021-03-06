import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/register.scss";

export default function Register() {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [firstSurname, setFirstSurname] = useState("");
	const [secondSurname, setSecondSurname] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [telephoneNumber, setTelephoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const inputNameRef = useRef(null);

	const handleRegister = e => {
		e.preventDefault();

		// Se manda a crear el usuario
		const userBody = {
			name: name,
			first_surname: firstSurname,
			second_surname: secondSurname,
			birth_date: birthDate,
			telephone_number: telephoneNumber,
			user_image: "",
			email: email,
			password: password,
			active: true
		};

		actions.register(userBody);
	};

	useEffect(() => {
		inputNameRef.current.focus();
	}, []);

	return (
		<div className="container-fluid container-register-main-class">
			<div className="row d-flex flex-row align-items-center justify-content-center">
				<div className="col" />
				<div className="col-sm-9 col-md-6 register-main-class">
					<div className="row d-flex flex-row align-items-center justify-content-center mt-3">
						<h2 className="text-white">Crear cuenta</h2>
					</div>
					<hr className="line-class" />
					<div>
						<form onSubmit={handleRegister}>
							<div className="m-3">
								<label className="form-label text-white">Nombre</label>
								<input
									ref={inputNameRef}
									type="text"
									className="form-control"
									id="inputName"
									placeholder="Ingrese su nombre..."
									required
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Primer apellido</label>
								<input
									type="text"
									className="form-control"
									id="firstSurname"
									placeholder="Ingrese su primer apellido..."
									required
									value={firstSurname}
									onChange={e => setFirstSurname(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Segundo apellido</label>
								<input
									type="text"
									className="form-control"
									id="secondSurname"
									placeholder="Ingrese su segundo apellido..."
									value={secondSurname}
									onChange={e => setSecondSurname(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Fecha nacimiento</label>
								<input
									type="date"
									className="form-control"
									id="birthDate"
									placeholder="Ingrese su fecha de nacimiento..."
									value={birthDate}
									onChange={e => setBirthDate(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">N??mero tel??fono</label>
								<input
									type="number"
									className="form-control"
									id="telephoneNumber"
									placeholder="Ingrese su n??mero de tel??fono..."
									value={telephoneNumber}
									onChange={e => setTelephoneNumber(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Email</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail"
									placeholder="Ingrese su Email..."
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Contrase??a</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Ingrese su contrase??a..."
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<button type="submit" className="btn btn-danger btn-block">
									Registrar
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="col" />
			</div>
		</div>
	);
}
