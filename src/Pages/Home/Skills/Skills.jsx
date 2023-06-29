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
	SiLeaderprice,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Skills = () => {
	const [skillsData, setSkillsData] = useState([]);

	useEffect(() => {
		fetch("/my-skills.json")
			.then((res) => res.json())
			.then((data) => setSkillsData(data.skills));
	}, []);

	return (
		<section className="section-bg">
			<div className="mc">
				<SectionTitle
					title="Skills & Tools"
					description={`Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for users with various business objectives. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.`}
				/>

				<div>
					<ul className="grid items-center justify-center text-center grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
						{skillsData.map((skill) => (
							<li key={skill.name}>
								<div className="min-w-fit flex justify-between items-center gap-5 py-5 px-7 hover:bg-slate-200 transition duration-500 cursor-pointer bg-slate-100 shadow-md rounded-md">
									<div className="text-4xl mb-3 text-slate-600">
										{getIconComponent(skill.icon)}
									</div>

									<h3 className="font-semibold text-lg ">{skill.name}</h3>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
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

export default Skills;
