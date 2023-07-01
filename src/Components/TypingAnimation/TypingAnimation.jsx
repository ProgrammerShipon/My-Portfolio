import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
	const [typingStatus, setTypingStatus] = useState("Initializing");
	return (
		<>
			<TypeAnimation
				sequence={[
					1500,
					() => {
						setTypingStatus("Typing...");
					},
					"Use callback-functions to trigger events",
					() => {
						setTypingStatus("Done Typing");
					},
					1000,
					() => {
						setTypingStatus("Deleting...");
					},
					"",
					() => {
						setTypingStatus("Done Deleting");
					},
				]}
				repeat={Infinity}
			/>
		</>
	);
};

export default TypingAnimation;
