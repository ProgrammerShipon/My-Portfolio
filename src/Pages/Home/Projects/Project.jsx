import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import useAos from "../../../Hooks/useAos";
import PSlider from "./PSlider";

const Project = ({ project, i }) => {
	useAos();
	const [favarite, setFavarite] = useState(false);

	console.log("project -> ", project);

	return (
		<div
			data-aos="fade-right"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
			data-aos-delay={300 * i}
			className="lg:w-1/3 md:w-1/2 p-4 w-full"
		>
			<div className="bg-slate-100 cursor-pointer hover:bg-slate-200 transition-all duration-300 p-6 rounded-lg shadow hover:shadow-md">
				<div className="h-[200px] rounded w-full overflow-y-scroll object-cover object-center mb-6">
					<PSlider PImg={project?.projectImg} />
				</div>
				<h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
					Shipon Hossen Raju
				</h3>
				<div className="flex">
					<h2 className="text-lg flex-auto text-gray-900 font-medium title-font mb-4">
						<a target="_blank" href={project?.liveLinks[0]?.link}>
							{project?.projectName}
						</a>
					</h2>
					<div className="flex-grow-0" onClick={() => setFavarite(!favarite)}>
						{favarite ? (
							<FaHeart class="h-6 w-6 text-red-500 cursor-pointer select-none" />
						) : (
							<FaRegHeart class="h-6 w-6  text-gray-500 cursor-pointer select-none" />
						)}
					</div>
				</div>
				<p className="leading-tight text-base flex flex-wrap gap-1 py-3 mb-3">
					{project?.projectUsingLanguage?.map((lg, i) => (
						<>
							<span key={i} className="bg-[#cbd5e1a8] p-1 rounded-md">
								{lg}
							</span>
						</>
					))}
				</p>
				<p className="leading-relaxed text-base">
					{project?.projectDetails.slice(0, 80) + "..."}
				</p>

				<div className="flex flex-col md:flex-row md:justify-between gap-3 mt-6">
					<button>
						<a
							target="_blank"
							href={project?.liveLinks[0]?.link}
							class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
						>
							<span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
							<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
								Show Live
							</span>
						</a>
					</button>

					<button>
						<a
							target="_blank"
							href={project?.codeLinks[0]?.link}
							class="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-slate-700 bg-slate-200 rounded-lg group"
						>
							<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
							<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
							<span class="relative group-hover:text-slate-100 transition">
								Github Code
							</span>
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
