import React from "react";
import SocialsLink from "../../../Components/SocialsLink/SocialsLink";
import useAos from "../../../Hooks/useAos";
import Form from "./Form";

const Contact = () => {
	useAos();

	return (
		<section id="Contact" className="section-bg body-font relative">
			<div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
				<div
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
				>
					<iframe
						className="absolute inset-0 w-full h-full"
						frameBorder={0}
						title="map"
						marginHeight={0}
						marginWidth={0}
						scrolling="no"
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d445.78803035430934!2d89.66818038920397!3d23.838726963029675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1688055004507!5m2!1sen!2sbd"
						// style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
					<div className="bg-white w-11/12 mx-auto relative flex flex-wrap py-6 rounded shadow-md">
						<div className="lg:w-1/2 px-6">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mb-1">
								ADDRESS
							</h2>
							<p className="mt-1 mb-3">Aminpur, Pabna, Bangladesh </p>

							<SocialsLink />
						</div>
						<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
								EMAIL
							</h2>
							<a className="text-indigo-500 leading-relaxed">
								msshipon234@gmail.com
							</a>
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
								PHONE
							</h2>
							<p className="leading-relaxed">+88017650-37372</p>
						</div>
					</div>
				</div>

				<div
					data-aos="fade-left"
					data-aos-anchor="#example-anchor"
					data-aos-offset="500"
					data-aos-duration="500"
					className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-8 mt-8 md:mt-0"
				>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;

{
	/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d445.78803035430934!2d89.66818038920397!3d23.838726963029675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1688055004507!5m2!1sen!2sbd" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
