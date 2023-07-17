import { Link } from "react-router-dom";
import myImg from "../../../assets/My-Image/Banner-1.png";
import useAos from "../../../Hooks/useAos";
import TypingAnimation from "../../../Components/TypingAnimation/TypingAnimation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = () => {
	useAos();

	return (
		<>
			<section
				id="home"
				className="text-gray-600 section-bg body-font md:mt-10"
			>
				<div className="mc flex px-5 md:flex-row flex-col-reverse gap-5 items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex gap-4 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h3 className="text-md font-semibold"> HEY THERE 🙂, I{`'`}M </h3>
						<h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
							Shipon Hossen Raju
						</h1>

						{/* text typing */}
						<TypingAnimation />

						<p className="leading-relaxed">
							I{`'`}m a web developer and brand identity designer with good
							experience in building sleek and scalable user interface,
							designing unique brand identities and building optimal backend
							systems.
						</p>
						<div className="flex justify-center flex-col md:flex-row gap-5">
							<Link
								to=""
								className="relative inline-block text-lg group shadow-lg"
							>
								<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
									<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
									<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
									<span className="relative">Hire Me</span>
								</span>
								<span
									className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
									data-rounded="rounded-lg"
								></span>
							</Link>

							<a
								href="../../../assets/files/Shipon-WD-Resume.1.pdf"
								download={true}
								class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-200 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
							>
								<span class="absolute top-0 left-0 w-full h-1 transition-all duration-200 ease-in-out bg-indigo-600 group-hover:h-full"></span>
								<span class="absolute right-0 pr-4 mt-4 duration-300 ease-out group-hover:translate-y-12 rotate-90">
									<svg
										class="w-5 h-5 text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>
								<span class="absolute left-0 pl-4 mb-4 -translate-y-12 group-hover:translate-y-0  ease-out duration-200 rotate-90">
									<svg
										class="w-5 h-5 text-green-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										></path>
									</svg>
								</span>
								<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
									Download Resume
								</span>
							</a>
						</div>
					</div>

					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center">
						<div className="transform hover:scale-105 transition duration-300">
							<figure
								data-aos="zoom-in"
								className="border-4 border-blue-500 shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
							>
								<LazyLoadImage
									className="object-cover object-center h-full w-full "
									effect="blur"
									alt="hero"
									src={myImg}
								/>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
