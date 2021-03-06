import React from "react";
import { Link } from "react-router-dom";
import "../views/finderylostPets.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class PostList extends React.Component {
	render() {
		return (
			<div>
				<div className="container-fluid mt-5 pt-5">
					<div className="container-fluid mt-5">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									if ("status" in store) {
										return store.status.map((item, index) => {
											if ("name" in item) {
												return (
													<Link
														to={"LostPets/" + index}
														className="col-12 col-lg-3"
														key={index}>
														<div className="row p-2">
															<div
																className="col-4 p-2 mb-4 img-ch shadow-sm"
																style={{
																	backgroundImage: "url(" + item.photo_url + ")"
																}}
															/>
															<div className="col-8  p-2 mb-4 grist shadow-sm">
																<p>
																	<strong
																		className="font-weight-bolder"
																		style={{ color: "black" }}>
																		Nombre:
																	</strong>
																	{" " + item.name}
																</p>
																<p>
																	<strong
																		className="font-weight-bolder"
																		style={{ color: "black" }}>
																		Fecha:
																	</strong>
																	{" " + item.created_at}
																</p>
																<p>
																	<strong
																		className="font-weight-bolder"
																		style={{ color: "black" }}>
																		Comuna:
																	</strong>
																	{" " + item.district}
																</p>
															</div>
														</div>
													</Link>
												);
											}
										});
									}
								}}
							</Context.Consumer>

							<div className="row" style={{ zIndex: 0 }}>
								<div className="col-md-12 col-10 fixed-bottom">
									<div className="row">
										<div className="col-md-10 col-10 " />
										<Link to="/addForm" className="col-md-2 col-2 mb-5 pb-4">
											<i
												className="fas fa-plus-circle pb-3 pl-3"
												style={{ color: "#d50000", fontSize: "4em" }}
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5" />
					</div>
				</div>
			</div>
		);
	}
}

/* export class LostPets extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className += " active ";
		document.querySelector(".fa-bullseye").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-award").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
	}
	render() {
		return (
			<div>
				<Navbar title="BUSCADOS" />
				<Footer />
			</div>
		);
	}
} */
