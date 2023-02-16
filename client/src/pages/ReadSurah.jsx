import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Back from "../components/Back";
import Heading from "../components/Heading";
import DisplayData from "../components/DisplayData";
import Surah from "../components/Surah";

function ReadSurah(props) {
	// Make a state about the surah selected, if none is selected, display the surah list. if selected, display the contents of the surah and the player. Just writing this down in case I forget later on
	const [surahNum, setSurahNum] = useState(0);
	const [englishN, setenglishN] = useState(null);

	useEffect(() => {
		console.log(surahNum);
		console.log(englishN)
	}, [surahNum,englishN]);

	const selectSurah = (num) => {
		setSurahNum(num);
	};

	const selectN = (num) => {
		setenglishN(num)
	};
	const moveFirst = () => {
		setSurahNum(1);
	};

	const movePrev = () => {
		if (surahNum > 1) {
			setSurahNum(surahNum - 1);
		}
	};

	const moveNext = () => {
		if (surahNum < 114) {
			setSurahNum(surahNum + 1);
		}
	};

	const moveLast = () => {
		setSurahNum(114);
	};

	return (
		<>
			<Bg>
				{surahNum > 0 ? (
					<Surah
						surah={surahNum}
						moveFirst={moveFirst}
						movePrev={movePrev}
						moveNext={moveNext}
						moveLast={moveLast}
						name={props.name}
						englishName={englishN}
					/>
				) : (
					<Container>
						<Heading />
						<Back />
						<div className="content">
							<div className="title">
								<h5>Learning Quran {">"} </h5>
								<h6>{props.name} Wise</h6>
							</div>
							<div className="body">
								<DisplayData SurahNum={selectSurah} englishName={selectN} name={props.name.toLowerCase()} />
								<div className="def">
									<h5>{props.name}:</h5>
									{props.name === "Surah" ?
										<h6>
											A surah, is the equivalent of "chapter"
											in the Qur'an. There are 114 surahs in
											the Quran, each divided into ayats. The
											chapters or surahs are of unequal
											length; the shortest surah has only
											three verses while the longest contains
											286 verses.
										</h6>
										:
										<h6>
											A juzʼ (Arabic: جُزْءْ, plural: أَجْزَاءْ ajzāʼ, literally meaning "part") is one of thirty parts of varying lengths into which the Quran is divided. It is also known as para (پارہ/পারা) in Iran and the Indian subcontinent.
										</h6>}

								</div>
							</div>
						</div>
					</Container>
				)}
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

	.content {
		.title {
			display: flex;
			align-items: center;
			justify-content: flex-start;

			.icon {
				height: 3.9rem;
				width: 3.9rem;

				color: #fff;
				stroke: 0.125rem #000;
			}

			h5 {
				display: flex;
				align-items: center;

				font-family: "Righteous";
				font-style: normal;
				font-weight: 400;
				font-size: 4.37rem;
				text-transform: capitalize;

				margin: 0;

				color: #fff;

				-webkit-text-stroke: 2px #000;
				text-shadow: 2px 2px 0px #000000;
			}

			h6 {
				font-family: "Righteous";
				font-style: normal;
				font-weight: 700;
				font-size: 3.125rem;
				text-transform: capitalize;
				margin: 0 0 0 1rem;

				color: #fff;

				-webkit-text-stroke: 2px #000;
				text-shadow: 1px 1px 0px #000000;
			}
		}

		.body {
			display: flex;

			.def {
				width: 35vw;
				padding: 0 2rem;

				h5 {
					font-family: "K2D";
					font-style: normal;
					font-weight: 600;
					font-size: 2.5rem;
					margin: 0;
					text-transform: capitalize;
					color: #fff;
					-webkit-text-stroke: 1px #000;
					text-shadow: 1px 1px 0px #000000;
				}

				h6 {
					font-family: "K2D";
					font-style: normal;
					font-weight: 400;
					font-size: 1.8rem;
					margin: 0;

					/* -webkit-text-stroke: 0.5px #000;
					text-shadow: 1px 1px 0px #000000; */
				}
			}
		}
	}
`;

export default ReadSurah;
