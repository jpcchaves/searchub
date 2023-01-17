import Loading from "../loading/Loading";

const Button = ({ loading }: { loading: boolean }) => {
	return (
		<button
			className={`btn inline-block px-6 py-2 border-2 border-purple-700 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-purple-900 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${
				loading ? "cursor-not-allowed" : ""
			}`}
			type="submit"
			id="button-addon3"
			disabled={loading}
		>
			{loading ? <Loading /> : "Buscar"}
		</button>
	);
};

export default Button;
