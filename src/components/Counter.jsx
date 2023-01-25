import React from "react";
import styled from "styled-components";
import {
	BiSkipNext,
	BiSkipPrevious,
	BiCaretRight,
	BiCaretLeft,
} from "react-icons/bi";

export default function Counter(props) {
	return (
		<Count>
			<button onClick={props.moveFirst}>
				<BiSkipPrevious className="icon" />
			</button>

			<hr />
			<button onClick={props.movePrev}>
				<BiCaretLeft className="icon" />
			</button>

			<hr />
			<p className="text">
				{props.num}/{props.total}
			</p>
			<hr />
			<button onClick={props.moveNext}>
				<BiCaretRight className="icon" />
			</button>

			<hr />
			<button onClick={props.moveLast}>
				<BiSkipNext className="icon" />
			</button>
		</Count>
	);
}

const Count = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 100px;
	height: 441px;

	background-color: white;
	border: 4px solid #000000;
	/* shadow */

	box-shadow: 2px 2px 0px #000000;
	border-radius: 28px;
	hr {
		width: 100%;
		border: none;
		height: 3px;
		background-color: black;
	}

  button{
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;

    cursor: pointer;
  }

	.icon {
		width: 2rem;
		height: 2rem;
		/* aspect-ratio: 1/1; */
	}

	.text {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-size: 1.5rem;
	}
`;
