import { useRef } from "react";
import useAos from "../../../Hooks/useAos";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Form = () => {
	useAos();
	const form = useRef();

	// console.log(import.meta.env.VITE_EmailTemplateKey);
	// console.log(import.meta.env.VITE_EmailPublicKey);
	// console.log(import.meta.env.VITE_EmailServiceKey);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EmailServiceKey,
				import.meta.env.VITE_EmailTemplateKey,
				form.current,
				import.meta.env.VITE_EmailPublicKey
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success("Your Message Send Successfully!");
				},
				(error) => {
					console.log(error.text);
					toast.error("Your Message Send Failed!");
				}
			);
	};

	return (
		<>
			<div
				data-aos="fade-left"
				data-aos-anchor="#example-anchor"
				data-aos-offset="500"
				data-aos-duration="500"
				className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
			>
				<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
					Connect with me
				</h2>
				<form ref={form} onSubmit={sendEmail}>
					<div className="relative mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-600">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="user_name"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="user_email"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-600"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							defaultValue={""}
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
					>
						Send Now
					</button>
				</form>
			</div>
		</>
	);
};

export default Form;
