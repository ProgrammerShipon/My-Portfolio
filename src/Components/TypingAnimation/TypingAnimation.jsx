import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
	const [typingStatus, setTypingStatus] = useState("Initializing");
	return (
		<>
			<TypeAnimation
				sequence={[
					"Web Developer",
					2000,
					"JavaScript Developer",
					2000,
					"React Developer",
					2000,
					"MERN Stack Developer",
					2000,
					"Front-End Developer",
				]}
				style={{ fontSize: "1.5em" }}
				repeat={Infinity}
			/>
		</>
	);
};

export default TypingAnimation;
