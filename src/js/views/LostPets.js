import React from "react";
import { Link } from "react-router-dom";
import "./finderylostPets.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { PostList } from "../component/PostList";

export class LostPets extends React.Component {
	componentDidMount() {
		document.querySelector(".fa-search").parentNode.className += " active ";
		document.querySelector(".fa-bullseye").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
		document.querySelector(".fa-award").parentNode.className = "col-sm-4 col-4 pt-4 pb-3";
	}

	render() {
		return (
			<div>
				<Navbar title="BUSCADOS" />
				<PostList />
				<Footer />
			</div>
		);
	}
}
