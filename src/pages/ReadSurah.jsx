import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Back from "../components/Back";
import Heading from "../components/Heading";

import Quran from '../utils/Quran.json';
import Quran_translated from '../utils/Quran_translated.json';

function ReadSurah() {

	return (
		<>
			<Bg>
				<Container>
					<Heading />
					<Back />
                    <div className="content">
                        <div className="title">
                            <h5>Learning Quran {'>'} </h5>
                            <h6>Surah Wise</h6>
                        </div>
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
	}
`;

export default ReadSurah;
