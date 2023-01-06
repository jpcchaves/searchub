import { FormEvent, useState } from 'react';
import { api } from '../../../hooks/useApi';
import { GithubUserInterface } from '../../../types/GithubUserInterface';
import HomeView from './view';

const userPl = {
	login: 'jpcchaves',
	id: 95300143,
	node_id: 'U_kgDOBa4qLw',
	avatar_url: 'https://avatars.githubusercontent.com/u/95300143?v=4',
	gravatar_id: '',
	url: 'https://api.github.com/users/jpcchaves',
	html_url: 'https://github.com/jpcchaves',
	followers_url: 'https://api.github.com/users/jpcchaves/followers',
	following_url:
		'https://api.github.com/users/jpcchaves/following{/other_user}',
	gists_url: 'https://api.github.com/users/jpcchaves/gists{/gist_id}',
	starred_url: 'https://api.github.com/users/jpcchaves/starred{/owner}{/repo}',
	subscriptions_url: 'https://api.github.com/users/jpcchaves/subscriptions',
	organizations_url: 'https://api.github.com/users/jpcchaves/orgs',
	repos_url: 'https://api.github.com/users/jpcchaves/repos',
	events_url: 'https://api.github.com/users/jpcchaves/events{/privacy}',
	received_events_url: 'https://api.github.com/users/jpcchaves/received_events',
	type: 'User',
	site_admin: false,
	name: 'João Paulo',
	company: 'Adasi Software',
	blog: 'https://porfolio-jpcchaves.vercel.app/',
	location: 'Caruaru, Pernambuco',
	email: null,
	hireable: null,
	bio: 'Desenvolvedor Front-end Jr.\r\nEstudante de Análise e Desenvolvimento de Sistemas',
	twitter_username: null,
	public_repos: 26,
	public_gists: 0,
	followers: 21,
	following: 18,
	created_at: '2021-11-30T15:27:33Z',
	updated_at: '2022-12-20T12:15:08Z',
};

const Home = () => {
	const [user, setUser] = useState<GithubUserInterface>(Object);
	const [username, setUsername] = useState('');
	const [loading, setLoading] = useState(false);

	const handleInputChange = (e: string) => {
		setUsername(e);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await api.get(`/users/${username}`);
			setUser(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<HomeView
			handleSubmit={handleSubmit}
			handleInputChange={handleInputChange}
			username={username}
			user={user}
			loading={loading}
		/>
	);
};

export default Home;
