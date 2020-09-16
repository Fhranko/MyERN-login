import React, { useState, Component } from 'react';
import { useHistory  } from 'react-router-dom'
import { login } from './UserFunctions';

// class Login extends Component {
//   constructor() {
//     super()
//     this.state = {
//       email: '',
//       password: '',
//       errors: {}
//     }

//     this.onChange = this.onChange.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   onSubmit(e) {
//     e.preventDefault()

//     const user = {
//       email: this.state.email,
//       password: this.state.password
//     }

//     login(user).then(res => {
//       if (res) {
//         this.props.history.push(`/profile`)
//       }
//     })
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 mt-5 mx-auto">
//             <form noValidate onSubmit={this.enviar}>
//               <h1 className="h3 mb-3 font-weight-normal text-center">Inicia sesión</h1>
//               <div className="form-group">
//                 <label htmlFor="email">Correo</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   placeholder="Ingresa tu correo"
//                   value={this.state.email}
//                   onChange={this.onChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Contraseña</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   name="password"
//                   placeholder="Ingresa tu contraseña"
//                   value={this.state.password}
//                   onChange={this.onChange}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn btn-lg btn-primary btn-block"
//               >
//                 Ingresar
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Login

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const enviar = (e) => {
		e.preventDefault();

		let user = {
			email,
			password,
    };
    
    let history = useHistory();

		login(user)
			.then((res) => {
				console.log('Datos enviados', res);
				history.push("/profile");
			})
			.catch((err) => {
				console.log('Error al enviar los datos', err);
			});
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 mt-5 mx-auto'>
					<form noValidate onSubmit={enviar}>
						<h1 className='h3 mb-3 font-weight-normal text-center'>
							Inicia sesión
						</h1>
						<div className='form-group'>
							<label htmlFor='email'>Correo</label>
							<input
								type='email'
								className='form-control'
								name='email'
								placeholder='Ingresa tu correo'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
							/>
						</div>
						<button type='submit' className='btn btn-lg btn-primary btn-block'>
							Ingresar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
