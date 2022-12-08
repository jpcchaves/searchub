import styled from 'styled-components';

export const HomePageContainer = styled.div`
	width: 100%;
	height: 100%;
`;
export const FormWrapper = styled.div`
	width: 80%;
	margin: 100px auto 0px auto;
	border: 1px solid #ccc;
	padding: 20px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const FormTitle = styled.h3`
	text-align: center;
	font-weight: 400;
	margin-bottom: 2rem;
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		width: 60%;
	}
`;

export const Label = styled.label`
	padding-left: 8px;
	margin-bottom: 0.5rem;
	font-weight: 500;
	text-align: left;
	display: inline-block;
`;

export const Input = styled.input`
	padding: 10px;
	border: none;
	border-bottom: 1px solid #ccc;
	border-radius: 8px;
	width: 60%;
	font-size: 16px;

	&::placeholder {
		font-size: 16px;
	}

	@media (max-width: 768px) {
		width: 70%;
	}
`;

export const InputSubmit = styled(Input)`
	margin-top: 10px;
`;
