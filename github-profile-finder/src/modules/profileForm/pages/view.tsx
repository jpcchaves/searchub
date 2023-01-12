import React from "react";
import { GithubUserInterface } from "../../../types/GithubUserInterface";
import AnimatedBg from "../components/animatedBg/AnimatedBg";
import ProfileInfo from "../components/profileInfo/ProfileInfo";
import Loading from "../components/loading/Loading";
import * as Icon from "phosphor-react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Error from "../components/error/Error";

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
									? "flex flex-col bg-white p-10 rounded-t-lg relative"
									: "flex flex-col bg-white p-10 rounded relative"
							}
						>
							<Icon.GithubLogo
								size={32}
								color="#0f0f0f"
								className="absolute right-3 top-3"
							>
								<animate
									attributeName="opacity"
									values="0;1;0"
									dur="3s"
									repeatCount="indefinite"
								></animate>
								<animateTransform
									attributeName="transform"
									attributeType="XML"
									type="scale"
									dur="3s"
									values="1;1.2;1"
									repeatCount="indefinite"
								/>
							</Icon.GithubLogo>
							<h2 className="text-center tracking-widest">
								Busque seu perfil do GitHub
							</h2>
							<p className="text-lg mt-4">
								<label>Usuário</label>
							</p>

							<div className="w-full flex justify-center flex-col gap-2">
								<Input
									handleInputChange={handleInputChange}
									username={username}
								/>
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
