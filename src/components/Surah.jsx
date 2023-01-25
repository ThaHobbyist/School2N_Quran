import React, { useState } from "react";
import styled from "styled-components";

import Heading from "../components/Heading";
import Back from "../components/Back";
import Navbar from "../components/Navbar";
import AudioPlayer from "../components/AudioPlayer";
import Counter from "../components/Counter";
import Quran from "../utils/Quran_rectified.json";

import Des2 from "../assets/num.png";

import { MdPlayCircle } from "react-icons/md";

export default function Surah(props) {
	const S = Quran["data"]["surahs"][props.surah - 1];

	const [currAyah, setCurrAyah] = useState(S["ayahs"][0]);
	const [startPlay, setStartPlay] = useState(false)

	const playAyah = (i) => {
		setCurrAyah(S["ayahs"][i-1])
		setStartPlay(!startPlay)
	}

	return (
		<>
			<Bg>
				<Container>
					<Heading />
					<div className="title">
						<Back className="back" />
						<h5 className="bar">|</h5>
						<h5 className="head">Surah {props.surah}</h5>
						<h5 className="bar">|</h5>
						<h5 className="head">{S["englishName"]}</h5>
					</div>
					<div className="body">
						<div className="content">
							<div className="ayahs">
								{S["ayahs"].map((item) => {
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
														{item.translated}
													</div>
													<div className="ar">
														{item.text}
													</div>
												</div>
											</div>
											<button onClick={() => {playAyah(item.numberInSurah)}} >
												<MdPlayCircle className="icon" />
											</button>
										</div>
									);
								})}
							</div>
							<Counter
								num={props.surah}
								total={Quran["data"]["surahs"].length}
								moveFirst={props.moveFirst}
								movePrev={props.movePrev}
								moveNext={props.moveNext}
								moveLast={props.moveLast}
							/>
						</div>
						<AudioPlayer
							className="audio"
							ayah={currAyah}
							surah={S}
							type="Surah"
							startPlay={startPlay}
							playAyah={playAyah}
						/>
					</div>

					<Navbar />
				</Container>
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
