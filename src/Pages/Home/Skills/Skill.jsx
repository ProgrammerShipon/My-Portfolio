import {
	FaReact,
	FaServer,
	FaNodeJs,
	FaGitAlt,
	FaGithub,
	FaUserTie,
} from "react-icons/fa";
import {
	SiCss3,
	SiTailwindcss,
	SiBootstrap,
	SiMongodb,
	SiAdobephotoshop,
	SiVisualstudio,
	SiJavascript,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";

const Skill = ({ skill, i }) => {
	return (
		<>
			<li data-aos="zoom-in-right" data-aos-delay={100 * i}>
				<div className="min-w-fit flex justify-between items-center gap-5 py-5 px-7 hover:bg-slate-200 transition duration-500 cursor-pointer bg-slate-100 shadow-md rounded-md">
					<div className="text-4xl mb-3 text-slate-600">
						{getIconComponent(skill.icon)}
					</div>

					<h3 className="font-semibold text-lg ">{skill.name}</h3>
				</div>
			</li>
		</>
	);
};

const getIconComponent = (iconName) => {
	switch (iconName) {
		case "AiOutlineHtml5":
			return <AiOutlineHtml5 />;
		case "SiCss3":
			return <SiCss3 />;
		case "SiTailwindcss":
			return <SiTailwindcss />;
		case "SiBootstrap":
			return <SiBootstrap />;
		case "FaReact":
			return <FaReact />;
		case "FaServer":
			return <FaServer />;
		case "FaNodeJs":
			return <FaNodeJs />;
		case "SiMongodb":
			return <SiMongodb />;
		case "FaGitAlt":
			return <FaGitAlt />;
		case "FaGithub":
			return <FaGithub />;
		case "SiAdobephotoshop":
			return <SiAdobephotoshop />;
		case "SiVisualstudio":
			return <SiVisualstudio />;
		case "SiJavascript":
			return <SiJavascript />;
		case "FaUserTie":
			return <FaUserTie />;
		default:
			return null;
	}
};

export default Skill;
