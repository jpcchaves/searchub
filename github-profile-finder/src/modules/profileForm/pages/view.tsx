import React from "react";
import { GithubUserInterface } from "../../../types/GithubUserInterface";
import AnimatedBg from "../components/animatedBg/AnimatedBg";
import ProfileInfo from "../components/profileInfo/ProfileInfo";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import AnimatedIcon from "../components/animatedIcon/AnimatedIcon";
import Error from "../components/error/Error";
import { ToastContainer } from "react-toastify";

import { MagnifyingGlass, X } from "phosphor-react";

interface HomeProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: string) => void;
	username: string;
	user: GithubUserInterface;
	loading: boolean;
	error: string;
	handleCleanupInput: () => void;
}

const HomeView = ({
	handleSubmit,
	handleInputChange,
	username,
	user,
	loading,
	error,
	handleCleanupInput,
}: HomeProps) => {
	return (
		<AnimatedBg>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="w-full max-w-full flex justify-center absolute z-50">
				<div className="lg:w-[60%] md:w-[70%] sm:w-[95%] w-[95%] mt-20">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div
							className={
								Object.keys(user).length > 0
									? "w-full flex flex-col bg-white p-10 rounded-t-lg relative"
									: "flex flex-col bg-white p-10 rounded relative"
							}
						>
							<AnimatedIcon />
							<h2 className="text-center tracking-widest">
								Busque seu perfil do GitHub
							</h2>
							<p className="text-lg mt-4">
								<label>Usuário</label>
							</p>

							<div className="w-full flex justify-center flex-col gap-2">
								<div className="flex rounded-md overflow-hidden w-full">
									<div className="flex w-full p-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition duration-200 ease-in-out m-0 focus-within:text-gray-700 focus-within:bg-white focus-within:border-purple-600">
										<Input
											handleInputChange={handleInputChange}
											username={username}
										/>
										{username ? (
											<span
												onClick={handleCleanupInput}
												className="bg-white text-black text-2xl font-semibold  rounded-r-md cursor-pointer flex justify-center items-center"
											>
												<X size={22} />
											</span>
										) : (
											<span
												className="bg-white text-black text-2xl font-semibold  rounded-r-md cursor-pointer flex justify-center items-center
								"
											>
												<MagnifyingGlass size={22} />
											</span>
										)}
									</div>
								</div>
								<Button loading={loading} />
							</div>
							{error ? <Error error={error} /> : null}
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
