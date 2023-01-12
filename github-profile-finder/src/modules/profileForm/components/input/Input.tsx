import React from "react";

interface InputComponentProps {
	username: string;
	handleInputChange: (e: string) => void;
}

const Input = ({ username, handleInputChange }: InputComponentProps) => {
	return (
		<input
			type="search"
			required
			className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
			aria-label="Search"
			aria-describedby="button-addon3"
			placeholder="Digite o nome do seu usuário..."
			value={username}
			onChange={(e) => handleInputChange(e.target.value)}
		/>
	);
};

export default Input;
