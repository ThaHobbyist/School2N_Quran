import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Heading from '../components/Heading';
import Navbar from '../components/Navbar';

const Login = () => {
	const [username, setusername] = useState(null)
	const [password, setPassword] = useState(null)

	const login = async () => {
		const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
			method: "POST",
			body: JSON.stringify({username,password})
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(username, password)
		login()
	}

	const handleChange = (e) => {
		console.log(e.target)
		if (e.target.name === "username") {
			setusername(e.target.value)
		} else if (e.target.name === "password") {
			setPassword(e.target.value)
		}
	}

	return (
		<>
			<Bg>
				<div style={{ height: "98vh", width: "90vw", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>

					<div style={{ height: "70%", width: "90%", display: "flex", alignItems: "center", justifyContent: "center" }}>

						<div style={{ width: "40%", margin: "auto" }}>
							<Heading />
						</div>
						<div className="form" style={{ width: "60%" }}>
							<FormContainer>
								<form
									onSubmit={(event) => handleSubmit(event)}
								>
									<div className="brand">
										<img src="" alt="" />
										<h1>Login</h1>
									</div>
									<input
										type="text"
										placeholder="Username"
										name="username"
										onChange={(e) => handleChange(e)}
										min="3"
									/>
									<input
										type="password"
										placeholder="Password"
										name="password"
										onChange={(e) => handleChange(e)}
										min="8"
									/>
									<button type="submit">Login</button>
									<span>
										Don't have an account ? <Link to="/register">Register</Link>
									</span>
								</form>
							</FormContainer>
						</div>

					</div>

				</div>
			</Bg>
		</>
	)
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: black;
      text-transform: uppercase;
      font-family: "Iceland", cursive;
      font-size: 3rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #ffffff;
    border: 0.3rem solid black;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.2rem solid #000000;
      border-radius: 0.4rem;
      color: black;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.3rem solid #000000;
        outline: none;
      }
    }
    button {
      background-color: #fa6d6d;
      color: black;
      padding: 1rem 2rem;
      border: 0.2rem solid black;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #ff0e0e;
      }
    }
    span {
      color: black;
      text-transform: uppercase;
      a {
        color: #5dfc4f;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export default Login