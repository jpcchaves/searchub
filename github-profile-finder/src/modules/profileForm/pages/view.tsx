import React from "react";
import { GithubUserInterface } from "../../../types/GithubUserInterface";
import AnimatedBg from "../components/animatedBg/AnimatedBg";
import ProfileInfo from "../components/profileInfo/ProfileInfo";

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
									disabled={loading ? true : false}
								>
									{loading ? (
										<div role="status">
											<svg
												aria-hidden="true"
												className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="currentColor"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentFill"
												/>
											</svg>
										</div>
									) : (
										"Buscar"
									)}
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
