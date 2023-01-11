import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quran from "./pages/Quran";
import ReadSurah from "./pages/ReadSurah";

function App() {
	return (
		<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/quran" element={<Quran />} />
					<Route path="/readSurah" element={<ReadSurah />} />
				</Routes>
		</Router>
	);
}

export default App;
