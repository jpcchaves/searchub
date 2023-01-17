import React from "react";

interface InputComponentProps {
	username: string;
	handleInputChange: (e: string) => void;
}

const Input = ({ username, handleInputChange }: InputComponentProps) => {
	return (
		<input
			type="text"
			required
			className="w-full focus:outline-none"
			aria-label="Search"
			aria-describedby="button-addon3"
			placeholder="Digite o nome do seu usuário..."
			value={username}
			onChange={(e) => handleInputChange(e.target.value)}
		/>
	);
};

export default Input;
