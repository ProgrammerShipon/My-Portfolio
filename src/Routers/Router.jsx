import { createBrowserRouter } from "react-router-dom";
import MainLt from "../Layout/MainLt";

const Route = createBrowserRouter([
	{
		path: "/",
		element: <MainLt />,
	},
]);

export default Route;
