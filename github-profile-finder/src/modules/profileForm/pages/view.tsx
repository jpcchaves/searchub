import React from "react";
import { GithubUserInterface } from "../../../types/GithubUserInterface";
import AnimatedBg from "../components/animatedBg/AnimatedBg";
import ProfileInfo from "../components/profileInfo/ProfileInfo";
import Loading from "../components/loading/Loading";

interface HomeProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: string) => void;
	username: string;
	user: GithubUserInterface;
	loading: boolean;
	error: string;
}

const HomeView = ({
	handleSubmit,
	handleInputChange,
	username,
	user,
	loading,
	error,
}: HomeProps) => {
	return (
		<AnimatedBg>
			<div className="w-full max-w-full flex justify-center absolute z-50">
				<div className="lg:w-[60%] md:w-[70%] sm:w-[95%] w-[95%] mt-20">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div
							className={
								Object.keys(user).length > 0
									? "flex flex-col bg-white p-10 rounded-t-lg"
									: "flex flex-col bg-white p-10 rounded"
							}
						>
							<h2 className="text-center tracking-widest">
								Busque seu perfil do GitHub
							</h2>
							<p className="text-lg mt-4">
								<label>Usuário</label>
							</p>

							<div className="w-full flex justify-center flex-col gap-2">
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
							</div>
							{error ? (
								<div className="my-4 flex items-center justify-center rounded p-2 bg-red-500 border-red-700 text-red-100">
									<p>{error}</p>
								</div>
							) : null}
						</div>
					</form>
					{!error && Object.keys(user).length > 0 && (
						<ProfileInfo user={user} />
					)}
				</div>
			</div>
		</AnimatedBg>
	);
};

export default HomeView;
