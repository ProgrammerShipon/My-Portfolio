import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialsLink = () => {
	return (
		<>
			<div className="ml-3 inline-flex gap-3 sm:ml-auto sm:mt-0 justify-center sm:justify-start">
				<Link
					to="https://www.linkedin.com/in/shipon-hossen-raju-7927211a2/"
					className="text-gray-500"
				>
					<FaLinkedin className="text-2xl cursor-pointer " />
				</Link>
				<Link
					to="https://www.facebook.com/ShiponHossenRaju"
					className="text-gray-500"
				>
					<FaFacebook className="text-2xl cursor-pointer " />
				</Link>
				<Link
					to={`https://twitter.com/ShiponHossenRa2`}
					className=" text-gray-500"
				>
					<FaTwitter className="text-2xl cursor-pointer " />
				</Link>
				<Link
					to={`https://www.instagram.com/shiponhossenraju/`}
					className=" text-gray-500"
				>
					<FaInstagram className="text-2xl cursor-pointer " />
				</Link>
			</div>
		</>
	);
};

export default SocialsLink;
