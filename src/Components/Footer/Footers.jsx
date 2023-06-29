import LogoCP from "../LogoCP/LogoCP";
import { Link } from "react-router-dom";
import SocialsLink from "../SocialsLink/SocialsLink";

const Footers = () => {
	return (
		<footer className="text-gray-600 body-font">
			<div className="bg-gray-100">
				<div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
					<LogoCP />

					<p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
						{new Date().getFullYear()} —
						<Link
							to="https://www.linkedin.com/in/shipon-hossen-raju-7927211a2/"
							rel="noopener noreferrer"
							className="text-gray-600 ml-1 hover:text-blue-500"
							target="_blank"
						>
							@ShiponHossenRaju
						</Link>
					</p>
					<span className="inline-flex items-center sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start px-3">
							<button className="border border-gray-600 hover:bg-blue-500 hover:text-slate-50 hover:border-blue-500 transition duration-300  rounded-md shadow-md text-gray-600 py-2 px-4">
								Hire Me
							</button>
						</div>

						<SocialsLink />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footers;
