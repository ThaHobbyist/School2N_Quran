import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quran from "./pages/Quran";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/quran" element={<Quran />} />
			</Routes>
		</Router>
	);
}

export default App;
