import { NavLink } from "react-router-dom";
import LogoCP from "../LogoCP/LogoCP";

const Navbar = () => {
	const menuItems = (
		<>
			<NavLink to="/" className="mr-5 hover:text-gray-900">
				Home
			</NavLink>
			<NavLink
				// to="/about-me"
				className="mr-5 hover:text-gray-900"
			>
				About Me
			</NavLink>
			<NavLink
				// to="project"
				className="mr-5 hover:text-gray-900"
			>
				Project
			</NavLink>
		</>
	);

	return (
		<div>
			<header className="text-gray-600 body-font shadow-md bg-[#eeeff0]">
				<div className="mc flex flex-wrap p-5 flex-col md:flex-row items-center">
					<LogoCP />
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						{menuItems}
					</nav>
					<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
						Resume
					</button>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
