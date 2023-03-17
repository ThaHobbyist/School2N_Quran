import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import AudioPlayer from "../components/AudioPlayer";
import { useEffect } from "react";
import { useState } from "react";

import Des2 from "../assets/num.png";
import { MdPlayCircle } from "react-icons/md";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import Back from "../components/Back";


function Favourites() {
	const navigate = useNavigate();
	const [S, setS] = useState([])
	const [favourites, setfavourites] = useState([])
	const [currAyah, setCurrAyah] = useState({});
	const [startPlay, setStartPlay] = useState(false)

	const getFav = async () => {
		const res = await fetch('/api/ayah/fav')
		const data = await res.json()
		const fav = data.favourites;
		console.log(fav)
		setfavourites(fav)
	}

	const playAyah = (i) => {
		setCurrAyah(S[i - 1])
		setStartPlay(!startPlay)
	}

	const pin = async (i) => {
		// console.log(S[i - 1], i);

		let push = "false"
		let pop = "true"

		const resput = await fetch(`/api/ayah/fav`, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({ push: push, pop: pop, ref: i })
		})
		const result = await resput.json()
		console.log(result, "0000000000000000000")
		setfavourites(result.favourites)
	}

	useEffect(() => {
		getFav()
	}, [])


	return (
		<>
			<Bg>
				<Container>
					<Heading />
					<Back/>
					<div className="title">
						<h5 className="head">Favourites</h5>
					</div>
					{favourites.length ? (<div className="body">
						<div className="content">
							<div className="ayahs">
								{favourites.map((item) => {
									return (
										<div className="ayat" key={item.number}>
											<div className="cont">
												<div className="number">
													<img
														className="image"
														src={Des2}
														alt=""
													/>
													<p className="num">
														{item.number}
													</p>
												</div>

												<div className="text">
													<div className="eng">
														{item.translatedText}
													</div>
													<div className="ar">
														{item.text}
													</div>
												</div>
											</div>

											<div style={{ display: "flex" }}>
												<button onClick={() => { playAyah(item.numberInSurah) }} >
													<MdPlayCircle className="icon" />
												</button>
												<button style={{ marginLeft: "10px", padding: "4px" }} onClick={() => { pin(item) }} >
													{
														(<AiFillPushpin className="icon" />)
													}
												</button>
											</div>
										</div>
									);
								})}
							</div>

						</div>
						<AudioPlayer
							className="audio"
							ayah={currAyah}
							surah={S}
							type="Surah"
							startPlay={startPlay}
							playAyah={playAyah}
						/>
					</div>) : (
						<div className="body">
							<div className="head">
								No Favourites Yet
							</div>
						</div>
					)}
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

const Container = styled.div`
	margin: 2.5rem;
	background: transparent;

	.title {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		max-width: 100%;

		/* .back {
            margin-top: 0;
        } */

		.head {
			margin: 0;
			margin-top: 1.8rem;
			margin-left: 1rem;
			margin-right: 1rem;
			font-family: "Righteous";
			font-style: normal;
			font-weight: 700;
			font-size: 40px;

			color: #ffffff;
			-webkit-text-stroke: 1px #000000;
			text-shadow: 1px 1px 0px #000000;
		}

		.bar {
			margin: 0;
			margin-top: 1.8rem;
			font-family: "Poppins";
			font-style: normal;
			font-weight: 400;
			font-size: 45px;
		}
	}

	.body {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		.content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		.audio {
			margin-top: 1rem;
		}

		.ayahs {
			width: 80vw;
			height: 55vh;
			overflow-y: scroll;
		}
		.ayat {
			min-height: 10rem;

			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			margin: 2rem;

			border: 3px solid #000000;
			box-shadow: 2px 2px 0px #000000;
			border-radius: 20px;
			padding: 2rem 3rem;
			background-color: #6af846;

			color: white;

			button {
				height: 3rem;
				aspect-ratio: 1;

				background: white;
				border: none;
				cursor: pointer;
				border-radius: 50%;
				padding: 0;

				.icon {
					height: 100%;
					width: 100%;
					margin: 0;
				}
			}

			.cont {
				display: flex;
				align-items: center;
				width: 100%;
			}

			.number {
				position: relative;
				.image {
					width: 100%;
					height: 100%;
				}

				.num {
					position: absolute;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;

					height: fit-content;
					margin: auto;
					text-align: center;

					font-family: "Poppins";
					font-style: normal;
					font-weight: 700;
					font-size: 30px;
				}
			}

			.text {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				margin-left: 1rem;

				.eng {
					font-family: "K2D";
					font-style: normal;
					font-weight: 600;
					font-size: 1.75rem;

					text-align: left;
				}

				.ar {
					font-family: "Readex Pro";
					font-style: sans-serif;
					font-weight: 700;
					font-size: 2.375rem;

					text-align: right;
				}
			}
		}
	}
`;

export default Favourites;
