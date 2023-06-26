import { createBrowserRouter } from "react-router-dom";
import MainLt from "../Layout/MainLt";
import Home from "../Pages/Home/Home";

const Route = createBrowserRouter([
	{
		path: "/",
		element: <MainLt />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

export default Route;
