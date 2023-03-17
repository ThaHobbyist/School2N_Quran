import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quran from "./pages/Quran";
import ReadSurah from "./pages/ReadSurah";
// import ReadPara from "./pages/ReadPara";
import Login from "./pages/Login";
import Register from "./pages/Register"
import { useState } from "react";
import { useEffect } from "react";
import Favourites from "./pages/Fav";

function App() {
	const [login, setLogin] = useState(localStorage.getItem('login'))

	useEffect(() => {
		console.log(login)
	}, [login])

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/quran" element={<Quran />} />
				<Route path="/readSurah" element={<ReadSurah name="Surah" />} />
				<Route path="/readPara" element={<ReadSurah name="Para" />} />
				<Route path="/fav" element={ <Favourites/> } />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
