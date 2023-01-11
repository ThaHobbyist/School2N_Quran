import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom" ;

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Back from "../components/Back";

import { MdKeyboardArrowRight } from "react-icons/md";

import { ReactComponent as Book } from "../assets/Book.svg";
import { ReactComponent as Book2 } from "../assets/Book2.svg";
import { ReactComponent as Book3 } from "../assets/Book3.svg";
import { ReactComponent as Pin2 } from "../assets/Pin2.svg";

function Quran() {
	const navigate = useNavigate();

	const modes = [
		{
			id: 1,
			name: "Para Wise",
			icon: <Book />,
			path: "/quran"
		},
		{
			id: 2,
			name: "Surah Wise",
			icon: <Book2 />,
			path: "/readSurah"
		},
		{
			id: 3,
			name: "Pinned Items",
			icon: <Pin2 />,
			path: "/quran"
		},
	];

	return (
		<>
			<Bg>
				<Container>
					<Heading />
					<Back />
					<h5 className="title">Learning Quran</h5>
					<div className="content">
						<div className="mode">
							<h5 className="subtitle">Select Mode:</h5>
							<div className="buttons">
								{modes.map((mode) => {
									return (
										<Btn key={mode.id} onClick={() => navigate(mode.path)} >
											<div className="data">
												{mode.icon}
												<p>{mode.name}</p>
											</div>
											<MdKeyboardArrowRight className="icon" />
										</Btn>
									);
								})}
							</div>
						</div>
						<Book3 className="ill" />
					</div>
				</Container>
				<Navbar />
			</Bg>
		</>
	);
}

const Bg = styled.div`
	background: linear-gradient(to bottom right, #fff, #a158ff);
	margin: 0;
	height: 100vh;
	width: 100vw;
	position: absolute;

	z-index: -2;
	overflow-y: auto;
`;

const Btn = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	min-width: 35vw;
	padding: 1rem 1.5rem;
	margin-bottom: 1rem;

	background: #fbff3d;
	border: 4px solid #000000;
	box-shadow: 3px 3px 0px #000000;
	border-radius: 1.25rem;

	.data {
		display: flex;
		align-items: center;

		p {
			font-family: "K2D";
			font-style: normal;
			font-weight: 600;
			font-size: 40px;

			margin: 0 0 0 1rem;
		}
	}

	.icon {
		width: 2.8rem;
		height: 2.8rem;
	}

	&:hover {
		background-color: #ccfd44;
		transition: 0.3s ease-in-out;

		.icon {
			width: 3.5rem;
			height: 3.5rem;
			transition: 0.3s ease-in-out;
		}
	}
`;

const Container = styled.div`
	background: transparent;
	margin: 2.5rem;

	font-size: 40px;

	.title {
		font-family: "Righteous";
		font-style: normal;
		font-weight: 400;
		font-size: 70px;

		color: #ffffff;

		margin: 0;

		-webkit-text-stroke: 2px #000000;
		text-shadow: 2px 2px 0px #000000;
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 2rem;
		height: 60vh;


		.ill{
			min-height: 50vh;
			max-height: 80vh;
			min-width: 50vh;
			max-width: 80vh;
		}

		.mode {
			.buttons {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-around;

				min-height: 50vh;
			}

			.subtitle {
				margin: 0;
				margin-bottom: 1.2rem;
				font-family: "Righteous";
				font-style: normal;
				font-size: 50px;

				color: #ffffff;

				-webkit-text-stroke: 2px #000000;
				text-shadow: 2px 2px 0px #000000;
			}
		}
	}
`;

export default Quran;
