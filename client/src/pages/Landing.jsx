import React from "react";
import styled from "styled-components";

import { ReactComponent as Panda } from "../assets/Panda.svg";

import Choices from "../components/Choices";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Landing() {
	const [login, setLogin] = useState(localStorage.getItem('login'))

	useEffect(() => {
		console.log(!login)
	}, [login])

	if (login === "false") {
		return <Navigate replace={true} to="/login" />
	} else {
		return (
			<>
				<Bg>
					<Container>
						<CircleGreen />
						<CircleYellow />
						<Heading />
						<div className="content">
							<div className="tagline">
								<p>Learning</p>
								<p>Is Always Fun</p>
							</div>
							<Panda className="panda" />
						</div>

						<Choices />
					</Container>
					<Navbar />
				</Bg>
			</>
		);
	}
}

const Bg = styled.div`
	background: linear-gradient(to bottom right, #fff, #a158ff);
	margin: 0;
	height: 100%;
	width: 100%;
	position: absolute;

	z-index: -2;
	
	overflow: auto;
`;

const CircleGreen = styled.div`
	border-radius: 50%;

	border: 4px solid #000000;
	box-shadow: 4px 4px 0px #000000;

	position: absolute;

	z-index: -1;
	background: #92ff3d;
	width: 562px;
	height: 533px;
	left: -52px;
	top: -294px;
`;

const CircleYellow = styled.div`
	border-radius: 50%;
	z-index: -1;

	border: 4px solid #000000;
	box-shadow: 4px 4px 0px #000000;

	position: absolute;
	background: #fbff3d;
	width: 562px;
	height: 533px;
	left: 69rem;
	top: 57rem;

	overflow: hidden;
`;

const Container = styled.div`
	margin: 2.5rem;
	background: transparent;
	overflow: auto;

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 5rem;

		.tagline {
			p {
				font-family: "Righteous";
				font-style: normal;
				font-weight: 400;
				font-size: 95px;
				text-transform: capitalize;

				color: #d5f800;

				-webkit-text-stroke: 2px #000;
				text-shadow: 2.5px 2.5px 0px #000000;

				margin: 0;
			}
		}

		.panda {
			margin-right: 3rem;
		}
	}
`;

export default Landing;
