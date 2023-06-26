import { Link } from "react-router-dom";

const Buttons = ({ btnText }) => {
	const button1 = (
		<Link
			onTouchEnd="#_"
			className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
		>
			<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
			<span className="relative group-hover:text-white">{btnText}</span>
		</Link>
	);

	// const btn = {
	// 	Btn,
	// };
	// return btn;
};

export default Buttons;
