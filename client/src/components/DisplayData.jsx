import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'

import Des2 from "../assets/num.png";

import Quran from "../utils/Quran.json";
import colorSet from "../utils/colorSet";

export default function DisplayData(props) {
	const colors = colorSet["colors"];
	const Q = Quran["data"];

	return (
		<>
			<Display>
				{Q["surahs"].map((item) => {
					return (
						<div
							className="data"
							key={item.number}
							style={{
								backgroundColor:
									colors[Math.floor(Math.random() * 4)],
							}}
							onClick={() => props.SurahNum(item.number)}
						>
							<div className="number">
								<img className="image" src={Des2} alt="" />
								<p className="num">{item.number}</p>
							</div>
							<div className="heading">
								<h5>{item.name}</h5>
							</div>
							<div className="translation">
								<h6>{item.englishName}</h6>
								<p>{item.englishNameTranslation}</p>
							</div>
						</div>
					);
				})}
			</Display>
		</>
	);
}

const Display = styled.div`
	height: 68vh;
	min-width: 60vw;
	overflow-y: scroll;
	padding: 0 2.5rem;

	.data {
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 2rem 0;

		border: 3px solid #000000;
		box-shadow: 2px 2px 0px #000000;
		border-radius: 20px;
		padding: 2rem 3rem;

		color: white;

		.heading {
			margin: 0 3rem;

			h5 {
				font-family: "Amiri", serif;
				font-size: 4rem;
				margin: 0;
			}
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

		.translation {
			display: flex;
			flex-direction: column;
			align-items: center;

			h6 {
				font-family: "K2D";
				font-style: normal;
				font-weight: 400;
				font-size: 2.2rem;
				margin: 0;

				display: flex;
				align-items: center;
				justify-content: center;
			}

			h5 {
				margin: 0;
				font-family: "K2D";
				font-style: normal;
				font-weight: 400;
				font-size: 2.5rem;
			}
		}
	}

	&::-webkit-slider-thumb {
		
		width: 12px;
		border: 2px solid #000;
		border-radius: 50%;
		background-color: #33ff00;
	}

	&::-webkit-slider-runnable-track {
		
		width: 16px;
		border: 3px solid #000;
		border-radius: 50%;
		background-color: #fff;
	}
`;
