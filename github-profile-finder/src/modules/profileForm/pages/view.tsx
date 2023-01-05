import React from 'react';
import { GithubUserInterface } from '../../../types/GithubUserInterface';

interface HomeProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: string) => void;
	username: string;
	user: GithubUserInterface;
}

const HomeView = ({ handleSubmit, handleInputChange, username }: HomeProps) => {
	return (
		<div>
			<div>
				<h2>Busque seu perfil do GitHub</h2>
				<form onSubmit={(e) => handleSubmit(e)}>
					<span>
						<label>Usuário</label>
					</span>
					<input
						type='text'
						name='profile'
						placeholder='Digite o nome do seu usuário...'
						value={username}
						onChange={(e) => handleInputChange(e.target.value)}
					/>

					<input type='submit' value='Buscar' />
				</form>
			</div>
		</div>
	);
};

export default HomeView;
