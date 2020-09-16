import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from './UserFunctions';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [errorMessage, setErrorMessage] = useState(false);

	const history = useHistory();

	function validateForm() {
		if (email && password) {
		} else {
			setError(true);
			setErrorMessage('Ambos datos son obligatorios');
		}
	}

	const sendData = (e) => {
		e.preventDefault();

		let user = {
			email,
			password,
		};

		login(user).then((res) => {
			validateForm();
			if (res) {
				history.push('/');
			}
			console.log(`La respuesta de Login es ${res}`);
		});
	};

	return (
		<div className='d-flex align-content-center h-100'>
			<div className='m-auto'>
				<form onSubmit={sendData}>
					<h1 className='h3 mb-3 font-weight-normal text-center'>
						Inicia sesión
					</h1>
					{error && (
						<label className='elementToFadeInAndOut alert alert-danger w-100 text-center'>
							{errorMessage}
						</label>
					)}
					<div className='form-group'>
						<label htmlFor='email'>Correo</label>
						<input
							type='email'
							className='form-control'
							name='email'
							placeholder='Ingresa tu correo'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							// required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Contraseña</label>
						<input
							type='password'
							className='form-control'
							name='password'
							placeholder='Ingresa tu contraseña'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							// required
						/>
					</div>
					<button
						type='submit'
						// disabled={!validateForm()}
						className='btn btn-lg btn-primary btn-block'
					>
						Ingresar
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
