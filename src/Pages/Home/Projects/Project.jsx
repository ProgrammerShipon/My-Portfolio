import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import useAos from "../../../Hooks/useAos";
import PSlider from "./PSlider";

const Project = ({ project, i }) => {
	useAos();
	const [favarite, setFavarite] = useState(false);
	return (
		<div
			data-aos="fade-right"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
			data-aos-delay={300 * i}
			className="lg:w-1/3 md:w-1/2 p-4 w-full"
		>
			<div className="bg-slate-100 cursor-pointer hover:bg-slate-200 transition-all duration-300 p-6 rounded-lg">
				<div className="h-[200px] rounded w-full overflow-y-scroll object-cover object-center mb-6">
					<PSlider PImg={project?.projectImg} />
				</div>
				<h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
					Shipon Hossen Raju
				</h3>
				<div className="flex ">
					<h2 className="text-lg flex-auto text-gray-900 font-medium title-font mb-4">
						{project?.projectName}
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
							<span key={i} className="bg-slate-200 p-1 rounded-md">
								{lg}
							</span>
						</>
					))}
				</p>
				<p className="leading-relaxed text-base">
					{project?.projectDetails.slice(0, 80) + "..."}
				</p>
			</div>
		</div>
	);
};

export default Project;
