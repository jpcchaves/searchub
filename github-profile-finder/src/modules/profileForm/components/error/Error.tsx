const Error = ({ error }: { error: string }) => {
	return (
		<div className="my-4 flex items-center justify-center rounded p-2 bg-red-500 border-red-700 text-red-100">
			<p>{error}</p>
		</div>
	);
};

export default Error;
