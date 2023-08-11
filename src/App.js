import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage"
import Contact from "./components/Contact";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="" element={<HomePage />} />
        <Route path="/contact" element= {<Contact/>} />
			</Routes>
		</div>
	);
}

export default App;