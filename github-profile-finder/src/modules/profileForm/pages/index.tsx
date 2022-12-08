import { useState } from 'react';

import {
	Form,
	FormTitle,
	FormWrapper,
	HomePageContainer,
	Input,
	InputSubmit,
	Label,
} from './style';

const Home = () => {
	return (
		<HomePageContainer>
			<FormWrapper>
				<FormTitle>Busque seu perfil do GitHub</FormTitle>
				<Form>
					<span>
						<Label>Usuário</Label>
					</span>
					<Input
						type='text'
						name='profile'
						placeholder='Digite o nome do seu usuário...'
					/>
					<InputSubmit type='submit' value='Buscar' />
				</Form>
			</FormWrapper>
		</HomePageContainer>
	);
};

export default Home;
