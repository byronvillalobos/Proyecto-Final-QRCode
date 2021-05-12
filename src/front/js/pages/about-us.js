import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import imgAboutUs1 from "../../img/img-about-us-1.png";

export default function AboutUs() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid main-div-class">
			<div className="container">
				<div className="row">
					<div className="col title-page-class">
						<h1>Quiénes Somos</h1>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-md-6 text-white">
						<div className="img-card-class">
							<img src={imgAboutUs1} alt="Image Services 1" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="card-class">
							<p>
								QR+Service es la idea hecha realidad de un grupo de personas con formación profesional
								que va desde la economía, aviación, electrónica, hasta la misma informática.
							</p>
							<p>
								Unidos por una oportunidad gubernamental en el estudio de la programación, Iván,
								Lilliana, Carlos y Jairo están en el nicho de las aplicaciones web desde mayo del 2021.
							</p>
							<p>
								Con muchas ganas y diario esfuerzo, con el objetivo siempre en mente, este grupo de
								individuos han sacado provecho de una oportunidad que los ubicó con nombre firme, en el
								mercado de las aplicaciones.
							</p>

							<p>
								Su punto de partida fue un proyecto de curso que alcanzó en un corto tiempo, mucha
								popularidad gracias a su alcance social. Posterior a esto las ideas siguieron
								evolucionando, y al día de hoy QR+Service es una aplicación con más de doscientas mil
								descargas que va en aumento gracias a su variedad de aplicaciones. Recomendado por
								instituciones gubernamentales, así como adquirido por empresas privadas, QR+Service
								sigue avanzando por buen camino ahora acompañado de otras aplicaciones creadas por el
								grupo.
							</p>

							<p>
								Siguenos en nuestras redes sociales y entérate de las nuevas mejoras y otros productos
								estrella de QR+Service.
							</p>

							{/* <p>
                                QR+Service es la idea hecha realidad de un grupo de personas con formación profesional
                                que va desde la economía, aviación, electrónica, hasta la misma informática.
                       
                                    Unidos por una oportunidad gubernamental en el estudio de la programación, Iván, Lilliana, Carlos y
                                    Jairo están en el nicho de las aplicaciones web desde mayo del 2021.
                         
                                        Con muchas ganas y diario esfuerzo, con el objetivo siempre en mente, este grupo de individuos han sacado
                                        provecho de una oportunidad que los ubicó con nombre firme, en el mercado de las
                                        aplicaciones.
                                        
                                        Su punto de partida fue un proyecto de curso que alcanzó en un corto
                                        tiempo, mucha popularidad gracias a su alcance social. Posterior a esto las ideas
                                        siguieron evolucionando, y al día de hoy QR+Service es una aplicación con más de
                                        doscientas mil descargas que va en aumento gracias a su variedad de aplicaciones.
                                        Recomendado por instituciones gubernamentales, así como adquirido por empresas privadas,
                                        QR+Service sigue avanzando por buen camino ahora acompañado de otras aplicaciones
                                        creadas por el grupo.
                                        
                                        Siguenos en nuestras redes sociales y entérate de las nuevas
                                        mejoras y otros productos estrella de QR+Service.
               
                                </p> */}
						</div>
					</div>
				</div>

				{/* <div className="row mt-5">
					<div className="col-md-6">
						<div className="card-class">
							<p>
								Puede ser utilizada por cualquier persona que desee tener un registro de sus datos en
								caso de emergencia.
							</p>
							<p>
								Es segura ya que solo usted podrá editar la información que irá en su QR o de las
								personas que haya registrado a su nombre.
							</p>
							<p>
								Muy útil para casos donde se deba cuidar de otras personas, con tan solo hacer la
								lectura del código QR tener acceso a información medica o contacto de emergencia.
							</p>
						</div>
					</div>
					<div className="col-md-6 text-white">
						<h1>Va una imagen</h1>
					</div>
				</div> */}
			</div>
		</div>
	);
}

// import React, { useContext, useState } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import "../../styles/about-us.scss";

// export default function AboutUs() {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container-fluid text-white">
// 			<h1>Quiénes somos Page</h1>
// 		</div>

// <div className="container-fluid text-white">
// 	<div>
// 		<div className="container">
// 			<h1 className="display-4">
// 				{" "}
// 				<span>Quienes Somos</span>{" "}
// 			</h1>
// 		</div>
// 	</div>

// 	<div className="row workingspace">
// 		<div className="col-lg-6">
// 			<img
// 				src="https://www.trecebits.com/wp-content/uploads/2020/06/Como-crear-un-c%C3%B3digo-QR-800x445.jpg"
// 				alt="Working Space"></img>
// 		</div>
// 		<div className="col-lg-5">
// 			<h2>
// 				El <span>Código QR</span> Que facilita <span>las cosas</span>
// 			</h2>
// 			<p>
// 				Un código QR es un código de barras bidimensional cuadrada que puede almacenar los datos
// 				codificados. Hoy en día, los códigos QR se pueden ver en folletos, carteles, revistas, etc.
// 				Usted puede detectar fácilmente estos códigos de barras de dos dimensiones a tu alrededor.
// 				Nuestra empresa le proporciona el código de barras con la información que usted necesite. Solo
// 				debe registrarse, completar la información y el código se creara, si así de sencillo
// 			</p>
// 		</div>
// 	</div>

// 	<section className="testimonial">
// 		<div className="row justify-content-center">
// 			<div className="col-lg-8">
// 				<p>Somos una empresa que busca facilitar la comunicacion a traves de codigos QR</p>
// 			</div>
// 		</div>
// 		<div className="row justify-content-center">
// 			<div className="col-lg-6 justify-content-center d-flex">
// 				<img
// 					src="https://cdn5.vectorstock.com/i/1000x1000/18/69/blue-qr-code-scanning-icon-or-design-logo-vector-18861869.jpg"
// 					alt="Testimonial 2"
// 					className="img-main"></img>
// 			</div>
// 		</div>
// 		<div className="row justify-content-center info-text">
// 			<div className="col-lg text-center">
// 				<h5>QR en HD</h5>
// 			</div>
// 		</div>

// 		<div className="container text-center">
// 			<h2 className="item-title">Explora los casos de uso del código QR en HD que te proporcionamos</h2>
// 		</div>
// 	</section>

// 	<div className="timeline">
// 		<div className="container left">
// 			<div className="content">
// 				<h2>2017</h2>
// 				<p>Lorem ipsum..</p>
// 			</div>
// 		</div>
// 		<div className="container right">
// 			<div className="content">
// 				<h2>2016</h2>
// 				<p>Lorem ipsum..</p>
// 			</div>
// 		</div>
// 	</div>

// 	<div className="timeline">
// 		<div className="container left">
// 			<div className="content">
// 				<h2>2017</h2>
// 				<p>
// 					Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
// 					vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
// 					per, habeo iusto primis ea eam.
// 				</p>
// 			</div>
// 		</div>
// 		<div className="container right">
// 			<div className="content">
// 				<h2>2016</h2>
// 				<p>
// 					Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
// 					vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
// 					per, habeo iusto primis ea eam.
// 				</p>
// 			</div>
// 		</div>
// 		<div className="container left">
// 			<div className="content">
// 				<h2>2015</h2>
// 				<p>
// 					Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
// 					vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
// 					per, habeo iusto primis ea eam.
// 				</p>
// 			</div>
// 		</div>
// 		<div className="container right">
// 			<div className="content">
// 				<h2>2012</h2>
// 				<p>
// 					Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
// 					vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
// 					per, habeo iusto primis ea eam.
// 				</p>
// 			</div>
// 		</div>
// 		<div className="container left">
// 			<div className="content">
// 				<h2>2011</h2>
// 				<p>
// 					Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
// 					vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
// 					per, habeo iusto primis ea eam.
// 				</p>
// 			</div>
// 		</div>
// 		<div className="container right">
// 			<div className="content">
// 				<h2>2007</h2>
// 				<p>
// 					Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
// 					vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim
// 					per, habeo iusto primis ea eam.
// 				</p>
// 			</div>
// 		</div>
// 	</div>
// </div>
// );
// }
