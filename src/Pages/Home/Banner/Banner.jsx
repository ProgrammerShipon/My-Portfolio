import { Link } from "react-router-dom";
import myImg from "../../../assets/My-Image/Banner-1.png";
import useAos from "../../../Hooks/useAos";

const Banner = () => {
	useAos();

	return (
		<>
			<section className="text-gray-600 section-bg body-font">
				<div className="mc flex px-5 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex gap-4 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h3 className="text-md font-semibold"> HEY THERE 🙂, I{`'`}M </h3>
						<h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
							Shipon Hossen Raju
						</h1>
						<p className="leading-relaxed">
							I{`'`}m a web developer and brand identity designer with good
							experience in building sleek and scalable user interface,
							designing unique brand identities and building optimal backend
							systems.
						</p>
						<div className="flex justify-center gap-5">
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

							<Link
								onTouchEnd="#"
								className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block shadow-lg"
							>
								<span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
								<span className="relative group-hover:text-white">
									{" "}
									Download Resume{" "}
								</span>
							</Link>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center">
						<figure
							data-aos="zoom-in"
							className="border-4 border-blue-500 shadow-xl"
						>
							<img
								className="object-cover object-center"
								alt="hero"
								src={myImg}
							/>
						</figure>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
