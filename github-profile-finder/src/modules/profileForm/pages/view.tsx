import React from 'react';
import { GithubUserInterface } from '../../../types/GithubUserInterface';
import AnimatedBg from '../components/AnimatedBg';

interface HomeProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleInputChange: (e: string) => void;
	username: string;
	user: GithubUserInterface;
}

const HomeView = ({
	handleSubmit,
	handleInputChange,
	username,
	user,
}: HomeProps) => {
	return (
		<AnimatedBg>
			<div className='w-screen h-screen max-w-full flex justify-center absolute z-50'>
				<div className='w-[70%] mt-20 '>
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className='flex flex-col bg-white p-10 rounded-t-lg'>
							<h2 className='text-center tracking-widest'>
								Busque seu perfil do GitHub
							</h2>
							<p className='text-lg mt-4'>
								<label>Usuário</label>
							</p>
							<div className='w-full flex justify-center flex-col gap-2'>
								<input
									type='search'
									className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
									aria-label='Search'
									aria-describedby='button-addon3'
									placeholder='Digite o nome do seu usuário...'
									value={username}
									onChange={(e) => handleInputChange(e.target.value)}
								/>
								<button
									className='btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mb-2'
									type='submit'
									id='button-addon3'
								>
									Buscar
								</button>
							</div>
						</div>
					</form>
					{Object.keys(user).length > 0 && (
						<div className='w-full bg-white rounded-b-lg shadow-md p-10'>
							<div className='w-full flex items-center justify-center flex-col'>
								<div className='mb-2'>
									<img
										className='inline-block h-40 w-40 rounded-full ring-2 ring-slate-200'
										src={`${user.avatar_url}`}
										alt=''
									/>
								</div>
								<div className='text-center tracking-widest flex flex-col'>
									<h5 className='text-2xl font-extrabold text-gray-900 '>
										{user.name}
									</h5>
									<p className='text-lg text-gray-700 font-extralight mb-2'>
										{user.login}
									</p>
									<p className='text-sm text-gray-500 '>{user.bio}</p>
									<div className='flex mt-4 space-x-3 md:mt-6 items-center justify-center'>
										{user.blog && (
											<a
												href={`${user.blog}`}
												target='_blank'
												className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
											>
												Site Pessoal
											</a>
										)}

										<a
											href={`${user.html_url}`}
											target='_blank'
											className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
										>
											Github
										</a>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</AnimatedBg>
	);
};

export default HomeView;
