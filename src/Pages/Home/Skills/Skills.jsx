import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAos from "../../../Hooks/useAos";
import Skill from "./Skill";

const Skills = () => {
	useAos();
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
						{skillsData.map((skill, i) => (
							<Skill skill={skill} i={i} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
