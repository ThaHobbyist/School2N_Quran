import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Home } from "../assets/home.svg";
import { ReactComponent as Settings } from "../assets/settings.svg";
import { ReactComponent as Pin } from "../assets/Pin.svg";
import { ReactComponent as Contact } from "../assets/contact.svg";
import { MdKeyboardArrowRight, MdOutlineMenu } from "react-icons/md";

function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	const closeMenu = () => {
		setNavbarOpen(false);
	};

	const li_itms = [
		{
			id: 1,
			title: "Home",
			icon: <Home />,
		},
		{
			id: 2,
			title: "Pinned Items",
			icon: <Pin />,
		},
		{
			id: 3,
			title: "Settings",
			icon: <Settings />,
		},
		{
			id: 4,
			title: "Contact Us",
			icon: <Contact />,
		},
	];

	return (
		<NavBar navbarOpen={navbarOpen}>
			<div className={`${navbarOpen ? "dark" : ""} `}></div>
			<button onClick={handleToggle}>
				{navbarOpen ? (
					<MdKeyboardArrowRight className="hamburger" />
				) : (
					<MdOutlineMenu className="hamburger" />
				)}
			</button>
			<ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
				{li_itms.map((item) => {
					return (
						<li key={item.id}>
							<a
								className="text"
								href={item.path}
								activeClassname="active-link"
								onClick={() => closeMenu()}
							>
								{item.icon}
								<p>{item.title}</p>
							</a>
							<hr />
						</li>
					);
				})}
			</ul>
		</NavBar>
	);
}

const NavBar = styled.div`
	position: relative;
	transition: 0.5s;

	.dark {
		transition: 0.5s;

		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	button {
		transition: 0.5s;
		position: fixed;
		right: 40px;
		top: 40px;
		z-index: 10;
		cursor: pointer;
		width: 75px;
		height: 64px;

		background: rgba(255, 255, 255, 0.6);
		border: 2px solid #000000;
		box-shadow: 1px 1px 0px #000000;
		border-radius: 20px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	button .hamburger {
		width: 80%;
		height: 80%;
	}

	.menuNav {
		transition: 0.5s;
		list-style: none;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;

		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0px;

		border-radius: 1.7rem 0 0 1.7rem;
		background: rgba(255, 255, 255, 0.9);

		width: 0px;
		overflow: hidden;
		z-index: 9;
		max-width: 20vw;
	}

	.menuNav.showMenu {
		display: flex;
		transition: 0.5s;
		width: 100%;
		border: 3px solid #000000;
	}

	a {
		font-family: "Josefin Sans";
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		color: #000;
		text-transform: uppercase;
		font-weight: bold;
		margin: 1rem 0 1rem 0;

		cursor: pointer;
	}

	.menuNav li {
		width: 80%;
	}

	hr {
		width: 75%;
		/* height: 0px; */
		border: 2px solid #000;
		border-radius: 2px;
		background: black;
	}

	.menuNav li:first-child {
		margin-top: 7rem;
	}
`;

export default Navbar;
