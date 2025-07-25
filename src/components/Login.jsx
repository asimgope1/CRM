import {
	IconMail,
	IconEyeOff,
	IconBrandFacebook,
	IconBrandGoogle,
	IconBrandApple,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		navigate("/dashboard");
	};

	const handleSignup = (e) => {
		e.preventDefault();
		navigate("/register");
	};

	const handleForgotPassword = (e) => {
		e.preventDefault();
		navigate("/forgot-password");
	};

	return (
		<div className='account-page bg-white'>
			<div className='main-wrapper'>
				<div className='overflow-hidden p-3 acc-vh'>
					<div className='row vh-100 w-100 g-0'>
						<div className='col-lg-6 vh-100 overflow-y-auto overflow-x-hidden'>
							<div className='row'>
								<div className='col-md-10 mx-auto'>
									<form
										onSubmit={handleLogin}
										className='vh-100 d-flex justify-content-between flex-column p-4 pb-0'>
										<div className='text-center mb-4 auth-logo'>
											<img
												src='/Logo1.png'
												alt='Logo'
												className='img-fluid bg-white rounded'
												style={{
													width: "200px",
													height: "70px",
													objectFit: "cover",
													margin: "0 auto",
												}}
											/>
										</div>

										<div>
											<div className='mb-3'>
												<h3 className='mb-2'>Sign In</h3>
												<p className='mb-0'>
													Access the CRMS panel using your email and passcode.
												</p>
											</div>
											<div className='mb-3'>
												<label className='form-label'>Email Address</label>
												<div className='input-group input-group-flat'>
													<input
														type='email'
														className='form-control'
														placeholder='Enter your email'
														required
													/>
													<span className='input-group-text'>
														<IconMail size={18} />
													</span>
												</div>
											</div>
											<div className='mb-3'>
												<label className='form-label'>Password</label>
												<div className='input-group input-group-flat pass-group'>
													<input
														type='password'
														className='form-control pass-input'
														placeholder='Enter your password'
														required
													/>
													<span className='input-group-text toggle-password'>
														<IconEyeOff size={18} />
													</span>
												</div>
											</div>
											<div className='d-flex align-items-center justify-content-between mb-3'>
												<div className='form-check form-check-md d-flex align-items-center'>
													<input
														className='form-check-input mt-0'
														type='checkbox'
														id='checkbox-md'
														defaultChecked
													/>
													<label
														className='form-check-label text-dark ms-1'
														htmlFor='checkbox-md'>
														Remember Me
													</label>
												</div>
												<div className='text-end'>
													<a
														href='#'
														className='link-danger fw-medium link-hover'
														onClick={handleForgotPassword}>
														Forgot Password?
													</a>
												</div>
											</div>
											<div className='row'>
												{/* Sign In Button */}
												<div className='col-6'>
													<div className='mb-3'>
														<button
															type='submit'
															className='btn btn-primary w-100'>
															Sign In
														</button>
													</div>
												</div>

												{/* Add Complaint Button */}
												<div className='col-6'>
													<div className='mb-3'>
														<button
															type='button'
															className='btn btn-outline-dark w-100'
															onClick={() => navigate("/AddComplaintPage")}>
															Add Complaint
														</button>
													</div>
												</div>
											</div>
 
											<div className='mb-3'>
												<p className='mb-0'>
													New on our platform?
													<a
														href='#'
														className='link-indigo fw-bold link-hover ms-1'
														onClick={handleSignup}>
														Create an account
													</a>
												</p>
											</div>
											<div className='or-login text-center position-relative mb-3'>
												<h6 className='fs-14 mb-0 position-relative text-body'>
													OR
												</h6>
											</div>
											<div className='d-flex align-items-center justify-content-center flex-wrap gap-2 mb-3'>
												<div className='text-center flex-fill'>
													<button
														type='button'
														className='p-2 btn btn-info d-flex align-items-center justify-content-center w-100'>
														<IconBrandFacebook size={20} className='me-1' />
														Facebook
													</button>
												</div>
												<div className='text-center flex-fill'>
													<button
														type='button'
														className='p-2 btn btn-outline-light d-flex align-items-center justify-content-center w-100 text-dark'>
														<IconBrandGoogle size={20} className='me-1' />
														Google
													</button>
												</div>
											</div>

											{/* add complaint button for navigation to page with add complaint form */}
										</div>
										<div className='text-center pb-4'>
											<p className='text-dark mb-0'>
												Copyright &copy; {new Date().getFullYear()} - CRMS
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className='col-lg-6 account-bg-01'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
