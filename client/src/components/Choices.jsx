import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Quran } from "../assets/quran.svg";
import { ReactComponent as Calc } from "../assets/calculator.svg";
import { ReactComponent as Read } from "../assets/reading.svg";
import { ReactComponent as Arabic } from "../assets/arabic.svg";
import { useNavigate } from 'react-router-dom';


function Choices() {
	const navigate = useNavigate();

    const items = [
		{
			id: 1,
			ill: <Quran />,
			title: "Quran",
			path: "/quran",
		},
		{
			id: 2,
			ill: <Calc />,
			title: "Mathematics",
			path: "/",
		},
		{
			id: 3,
			ill: <Read />,
			title: "Syllabic Reading",
			path: "/",
		},
		{
			id: 4,
			ill: <Arabic />,
			title: "Arabic",
			path: "/"
		},
	];

    return (
        <>
            <Choice>
                {
                    items.map(item => {
                        return (
							<div className="itm" key={item.id}>
								<div className='ill'>{item.ill}</div>

								<div className='text'>
									<p>Learn</p>
									<p>{item.title}</p>
								</div>

								<button className="gts" onClick={() => navigate(item.path)}>
									<p>Get Started </p>
								</button>
							</div>
						);
                    })
                }
            </Choice>
        </>
    );
}

const Choice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 1.5rem;
	flex-wrap: wrap;

	.itm {
		background: rgba(255, 255, 255, 0.65);
		border: 2px solid #000000;
		box-shadow: 2.5px 2.5px 0px #000000;
		border-radius: 20px;

		/* width: 334px; */
		min-width: 20rem;
		max-height: 50rem;
		margin-bottom: 2.2rem ;

		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		text-align: center;

		padding: 2rem;

		.text {
            margin: 1.5rem 0 1.5rem 0;
			p {
				font-family: "Righteous";
				font-style: normal;
				font-weight: 400;
				font-size: 35px;
				text-align: center;
				text-transform: capitalize;
				margin: 0;
				color: #000000;
                transition: 0.3s;
			}
            transition: 0.3s;
		}

		button {
			background: #d5f800;
			border: 1px solid #000000;
			box-shadow: 1px 1px 0px #000000;
			border-radius: 15px;

			transition: 0.3s;

            padding: 0.5rem 1.5rem 0.5rem 1.5rem;
            cursor: pointer;

			p {
				font-family: "K2D";
				font-style: normal;
				font-weight: 500;
				font-size: 25px;
				text-transform: capitalize;
                margin: 0;
			}
		}

        button:hover{
            background-color: #ff8d0a;
            transition: 0.3s;

            p{
                font-size: 30px;
                transition: 0.3s;
            }
        }
	}
`;

export default Choices;