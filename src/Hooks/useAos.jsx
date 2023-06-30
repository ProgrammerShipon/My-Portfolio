import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAos = () => {
	useEffect(() => {
		AOS.init();

		return () => {
			AOS.refresh(); // Clean up AOS when the component unmounts
		};
	}, []);

	return null; // Custom hooks typically don't return JSX elements
};

export default useAos;
