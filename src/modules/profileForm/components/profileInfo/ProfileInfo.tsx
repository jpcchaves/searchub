import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { GithubUserInterface } from "../../../../types/GithubUserInterface";

const ProfileInfo = ({ user }: { user: GithubUserInterface }) => {
	return (
		<div className="w-full bg-white rounded-b-lg px-10 mb-52 pt-4 pb-12">
			<div className="w-full flex items-center justify-center flex-col">
				<div className="mb-2">
					<img
						className="inline-block h-40 w-40 rounded-full ring-2 ring-purple-300 hover:scale-105 duration-200 cursor-pointer"
						src={`${user.avatar_url}`}
						alt=""
					/>
				</div>
				<div className="text-center tracking-widest flex flex-col">
					<h5 className="text-2xl font-extrabold text-gray-900 ">
						{user.name}
					</h5>
					<p className="text-lg text-gray-700 font-extralight mb-2">
						@{user.login}
					</p>
					<p className="text-sm text-gray-500 ">{user.bio}</p>
					<div className="flex mt-4 space-x-3 md:mt-6 items-center justify-center">
						{user.blog && (
							<a
								href={`${user.blog}`}
								target="_blank"
								className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 ease-in duration-100 focus:ring-4 focus:outline-none focus:ring-purple-300"
							>
								<BsLink45Deg className="mr-1 text-base tracking-widest" />
								Blog
							</a>
						)}
						<a
							href={`${user.html_url}`}
							target="_blank"
							className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease-in duration-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
						>
							<BsGithub className="mr-1 text-base tracking-widest" />
							Github
						</a>
					</div>
					<hr className="my-4" />
					<div>
						<div className="flex items-center justify-center">
							<div className="mr-4">
								<h6 className="text-sm">Seguidores</h6>
								<small>{user.followers}</small>
							</div>
							<div>
								<h6 className="text-sm">Seguindo</h6>
								<small>{user.following}</small>
							</div>
						</div>
					</div>
					<hr className="my-4" />
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
