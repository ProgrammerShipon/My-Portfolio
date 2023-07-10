import { Toaster } from "react-hot-toast";
import Footers from "../Components/Footer/Footers";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router-dom";

const MainLt = () => {
	return (
		<>
			<Navbar />

			<main>
				<Outlet />
			</main>

			<Toaster position="top-right" reverseOrder={false} />
			<Footers />
		</>
	);
};

export default MainLt;
