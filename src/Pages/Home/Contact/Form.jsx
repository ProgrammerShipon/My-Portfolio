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
					form.current.reset();
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
			<h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
				Connect with me
			</h2>
			<form ref={form} onSubmit={sendEmail}>
				<div className="relative mb-4">
					<label htmlFor="name" className="leading-7 text-sm text-gray-600">
						Name
					</label>
					<input
						required
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
						required
						type="email"
						id="email"
						name="user_email"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div className="relative mb-4">
					<label htmlFor="message" className="leading-7 text-sm text-gray-600">
						Message
					</label>
					<textarea
						required
						id="message"
						name="message"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						defaultValue={""}
					/>
				</div>
				<button
					type="submit"
					className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
				>
					<span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
						<span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
					</span>
					<span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
					<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
						Send Now
					</span>
				</button>
			</form>
		</>
	);
};

export default Form;
