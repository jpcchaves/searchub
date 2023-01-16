import { FormEvent, useState } from "react";
import { api } from "../../../hooks/useApi";
import { notifyError, notifySuccess } from "../../../hooks/useToast";
import { GithubUserInterface } from "../../../types/GithubUserInterface";
import HomeView from "./view";

const Home = () => {
	const [user, setUser] = useState<GithubUserInterface>(Object);
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleInputChange = (e: string) => {
		setUsername(e);
	};

	const handleCleanupState = () => {
		setUser({} as GithubUserInterface);
		setUsername("");
	};

	const handleCleanupInput = () => {
		handleCleanupState();
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await api.get(`/users/${username}`);
			setUser(response.data);
			notifySuccess(`Usuário ${username} buscado com sucesso!`);
			setLoading(false);
		} catch (error: any) {
			console.log(error.message);
			if (error.response.data.message) {
				setError(error.response.data.message);
			} else {
				setError("Ocorreu um erro... Tente novamente");
			}

			notifyError("Ocorreu um erro ao buscar o usuário.");
			setLoading(false);

			setTimeout(() => {
				handleCleanupState();
				setError("");
			}, 2000);
		}
	};

	return (
		<HomeView
			handleSubmit={handleSubmit}
			handleInputChange={handleInputChange}
			username={username}
			user={user}
			loading={loading}
			error={error}
			handleCleanupInput={handleCleanupInput}
		/>
	);
};

export default Home;
