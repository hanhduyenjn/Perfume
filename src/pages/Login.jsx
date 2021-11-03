import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
		url('https://images.unsplash.com/photo-1595535373192-fc8935bacd89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 3%;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0);
	backdrop-filter: blur(35px);
	border: 3px solid rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);
	overflow: hidden;
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 40px;
	color: white;
	letter-spacing: 1px;
`;

const Label = styled.h6`
	color: white;
	font-size: 16px;
	font-weight: 500;
	pointer-events: none;
	display: block;
	font-weight: 600;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	width: 100%;
	margin-top: 10px;
	border: none;
	outline: none;
	font-size: 16px;
	color: #ffffff;
	background: 0;
	padding: 0px;
`;

const InputContainer = styled.div`
	margin: 20px 0px;
	min-width: 40%;
	width: 100%;
`;

const Button = styled.button`
	border: 0;
	text-decoration: none;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 1);
	font-size: 16px;
	letter-spacing: 1px;
	cursor: pointer;
	text-transform: uppercase;
	padding: 10px;
	margin-bottom: 10px;
	margin-top: 20px;
	font-weight: bold;
	backdrop-filter: blur(35px);
`;

const Link = styled.a`
	font-size: 14px;
	text-decoration: none;
	cursor: pointer;
	color: rgba(255, 255, 255, 1);
	font-weight: bold;
	display: block;
	margin-top: 20px;
	display: inline-block;
`;
const SignUpForm = styled.div`
	width: 100%;
	text-align: center;
	color: white;
`;
const NormalText = styled.b`
	color: rgba(255, 255, 255, 1);
	font-size: 14px;
	font-weight: normal;
	display: inline-block;
`;
const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<InputContainer>
						<Label>Email address</Label>
						<Input type="email" placeholder="Enter email" />
					</InputContainer>
					<InputContainer>
						<Label>Password</Label>
						<Input type="password" placeholder="Enter password" />
						<Link>Forgot password?</Link>
					</InputContainer>
					<Button>Sign in</Button>
					<SignUpForm>
						<NormalText>Not a member? &nbsp; </NormalText>
						<Link> Sign up now</Link>
					</SignUpForm>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
