import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("/projects.json")
			.then((res) => res.json())
			.then((pj) => setProjects(pj));
	}, []);

	return (
		<section id="projects" className="text-gray-600 body-font section-bg">
			<div className="mc px-5">
				<div>
					<SectionTitle
						title={"My Projects"}
						description={`These are some of the jobs I've done in the past.`}
					/>
				</div>
				<div className="flex flex-wrap -m-4">
					{projects &&
						projects.map((project, i) => (
							<Project key={i} i={i} project={project} />
						))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
