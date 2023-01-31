import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";

function Back() {
	const navigate = useNavigate();

	return (
		<>
			<Bk onClick={() => navigate(-1)}>
				<MdKeyboardArrowLeft className="icon" />
				<h5>Back</h5>
			</Bk>
		</>
	);
}

const Bk = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	margin-top: 1.8rem  ;

	.icon {
		width: 2.375rem;
		height: 2.375rem;
	}

	h5 {
		font-family: "Josefin Sans";
		font-style: normal;
		font-weight: 600;
		font-size: 2.5rem;

		display: flex;
		align-items: center;

		margin: 0px;
	}
`;

export default Back;
