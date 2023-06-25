import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";

const MainLt = () => {
	return (
		<>
			<Navbar />

			<main>
				<Outlet />
			</main>
		</>
	);
};

export default MainLt;
