import { FormEvent, useState } from 'react';
import { api } from '../../../hooks/useApi';
import { GithubUserInterface } from '../../../types/GithubUserInterface';
import HomeView from './view';

const Home = () => {
	const [user, setUser] = useState<GithubUserInterface>(Object);
	const [username, setUsername] = useState('');

	const handleInputChange = (e: string) => {
		setUsername(e);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await api.get(`/users/${username}`);

			setUser(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<HomeView
			handleSubmit={handleSubmit}
			handleInputChange={handleInputChange}
			username={username}
			user={user}
		/>
	);
};

export default Home;
