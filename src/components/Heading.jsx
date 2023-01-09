import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../assets/Logo.svg";

function Heading() {
	return (
		<Head className="heading">
			<div className="logo">
				<Logo />
			</div>
			<div className="text">
				<h2>School2N</h2>
				<h5>PREMIUM Learning Kids</h5>
			</div>
		</Head>
	);
}

const Head = styled.div`
	display: flex;

	.text {
		margin-left: 1rem;
	}

	h2 {
		font-family: "Josefin Sans";
		font-style: normal;
		font-weight: 700;
		font-size: 50px;
		text-transform: capitalize;
		color: #ffffff;
		margin: 0;
		margin-top: 0.5rem;

		-webkit-text-stroke: 1.5px #000000;
		text-shadow: 1.5px 1.5px 0px #000000;
	}

	h5 {
		font-family: "Josefin Sans";
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		align-items: center;
		margin: 0;
		color: #000000;
	}

    
`;

export default Heading;
