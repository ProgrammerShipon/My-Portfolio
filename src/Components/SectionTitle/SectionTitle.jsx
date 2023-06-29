const SectionTitle = ({ title, description }) => {
	return (
		<div className="max-w-xl w-10/12 mx-auto text-center mb-8">
			{title && (
				<h1 className="text-2xl font-bold text-center py-6">{title}</h1>
			)}
			{description && <div className="">{description}</div>}
		</div>
	);
};

export default SectionTitle;
