import {
	IconMail,
	IconEyeOff,
	IconBrandFacebook,
	IconBrandGoogle,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		console.log("🔐 Starting login request...");
		navigate("/dashboard");

		try {
			const response = await fetch(
				"https://192.168.0.106:7054/api/Auth/login",
				{
					method: "POST",
					headers: {
						Accept: "*/*",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username: email, password }),
				},
			);

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(errorText || "Login failed");
			}

			const result = await response.json();
			console.log("✅ Login response:", result);

			if (result.token) {
				localStorage.setItem("token", result.token);
				navigate("/dashboard");
			} else {
				throw new Error("No token received");
			}
		} catch (error) {
			console.error("❌ Login error:", error.message);
			alert("Login failed: " + error.message);
		}
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
		<div
			className='container-fluid p-0'
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				backgroundColor: "#FFF1EA",
				position: "relative",
			}}>
			{/* Blurred Background Elements */}
			<div
				style={{
					position: "absolute",
					top: "20%",
					left: "10%",
					width: "200px",
					height: "200px",
					borderRadius: "50%",
					background: "rgba(244, 142, 110, 0.2)",
					filter: "blur(40px)",
					zIndex: 0,
				}}></div>
			<div
				style={{
					position: "absolute",
					bottom: "15%",
					right: "10%",
					width: "250px",
					height: "250px",
					borderRadius: "50%",
					background: "rgba(244, 142, 110, 0.15)",
					filter: "blur(50px)",
					zIndex: 0,
				}}></div>

			{/* Top Wave */}
			<div
				style={{
					height: "100px",
					flexShrink: 0,
					position: "relative",
					zIndex: 1,
					backgroundColor: "#FFF1EA",
				}}>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 1440 100'
					preserveAspectRatio='none'
					style={{ display: "block" }}>
					<path
						fill='#F48E6E'
						d='M0,50L48,43.3C96,37,192,23,288,25C384,27,480,47,576,56.7C672,67,768,67,864,58.3C960,50,1056,33,1152,28.3C1248,23,1344,30,1392,33.3L1440,37L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
				</svg>
			</div>

			{/* Main Content */}
			<div
				className='flex-grow-1 d-flex align-items-center justify-content-center py-3'
				style={{
					overflowY: "hidden",
					position: "relative",
					zIndex: 1,
				}}>
				<div className='col-12 col-sm-8 col-md-6 col-lg-4'>
					<div
						className='bg-white rounded shadow p-4'
						style={{
							fontSize: "0.875rem",
							backdropFilter: "blur(8px)",
							backgroundColor: "rgba(255, 255, 255, 0.85)",
							border: "1px solid rgba(244, 142, 110, 0.2)",
							boxShadow: "0 8px 32px rgba(244, 142, 110, 0.1)",
						}}>
						<form
							onSubmit={handleLogin}
							className='d-flex flex-column justify-content-between'>
							{/* Logo */}
							<div className='text-center mb-3'>
								<img
									src='/Logo1.png'
									alt='Logo'
									className='img-fluid bg-white rounded'
									style={{
										width: "120px",
										height: "80px",
										objectFit: "cover",
										margin: "0 auto",
										border: "2px solid #F48E6E",
									}}
								/>
							</div>

							{/* Heading */}
							<div className='mb-2 text-center'>
								<h5 className='mb-1' style={{ color: "#F48E6E" }}>
									Sign In
								</h5>
								<p className='mb-0 small text-muted'>
									Access the CRMS panel using your credentials.
								</p>
							</div>

							{/* Email */}
							<div className='mb-2'>
								<label className='form-label small'>Email Address</label>
								<div className='input-group input-group-sm'>
									<input
										// type='email'
										className='form-control'
										placeholder='Email'
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										style={{ borderColor: "#F48E6E" }}
									/>
									<span
										className='input-group-text'
										style={{
											backgroundColor: "#FFF1EA",
											borderColor: "#F48E6E",
										}}>
										<IconMail size={16} color='#F48E6E' />
									</span>
								</div>
							</div>

							{/* Password */}
							<div className='mb-2'>
								<label className='form-label small'>Password</label>
								<div className='input-group input-group-sm'>
									<input
										// type='password'
										className='form-control'
										placeholder='Password'
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										style={{ borderColor: "#F48E6E" }}
									/>
									<span
										className='input-group-text'
										style={{
											backgroundColor: "#FFF1EA",
											borderColor: "#F48E6E",
										}}>
										<IconEyeOff size={16} color='#F48E6E' />
									</span>
								</div>
							</div>

							{/* Remember + Forgot */}
							<div className='d-flex justify-content-between align-items-center mb-2'>
								<div className='form-check form-check-sm d-flex align-items-center'>
									<input
										className='form-check-input'
										type='checkbox'
										id='remember'
										defaultChecked
										style={{ borderColor: "#F48E6E" }}
									/>
									<label
										className='form-check-label small ms-1'
										htmlFor='remember'>
										Remember Me
									</label>
								</div>
								<button
									className='btn btn-link p-0 small'
									onClick={handleForgotPassword}
									style={{ color: "#F48E6E" }}>
									Forgot?
								</button>
							</div>

							{/* Buttons */}
							<div className='row justify-content-center mb-2'>
								<div className='col-8'>
									<div className='d-flex gap-2'>
										<button
											type='submit'
											className='btn btn-sm flex-grow-1 d-flex align-items-center justify-content-center'
											style={{
												backgroundColor: "#F48E6E",
												color: "white",
												border: "none",
											}}>
											SignIn
										</button>
										<button
											type='button'
											className='btn btn-outline-secondary btn-sm flex-grow-1'
											onClick={() => navigate("/AddComplaintPage")}
											style={{ borderColor: "#F48E6E", color: "#F48E6E" }}>
											Add Complaint
										</button>
									</div>
								</div>
							</div>

							{/* Signup */}
							<p className='text-center small mb-2'>
								New here?{" "}
								<button
									className='btn btn-link p-0 small'
									onClick={handleSignup}
									style={{ color: "#F48E6E" }}>
									Create account
								</button>
							</p>

							{/* OR Divider */}
							<div className='text-center position-relative mb-2'>
								<hr style={{ borderColor: "rgba(244, 142, 110, 0.3)" }} />
								<span
									className='position-absolute top-50 start-50 translate-middle bg-white px-2 small'
									style={{ color: "#F48E6E" }}>
									OR
								</span>
							</div>

							{/* Social Login */}
							<div className='d-flex justify-content-center gap-2 mb-2'>
								<button
									type='button'
									className='btn btn-sm d-flex align-items-center justify-content-center'
									style={{
										backgroundColor: "#3b5998",
										color: "white",
									}}>
									<IconBrandFacebook size={16} className='me-1' />
									Facebook
								</button>
								<button
									type='button'
									className='btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center'
									style={{ borderColor: "#F48E6E", color: "#F48E6E" }}>
									<IconBrandGoogle size={16} className='me-1' />
									Google
								</button>
							</div>

							{/* Footer */}
							<p className='text-center small text-muted pt-2 mb-0'>
								&copy; {new Date().getFullYear()} - CRMS
							</p>
						</form>
					</div>
				</div>
			</div>

			{/* Bottom Wave */}
			<div
				style={{
					height: "100px",
					flexShrink: 0,
					position: "relative",
					zIndex: 1,
					backgroundColor: "#FFF1EA",
				}}>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 1440 100'
					preserveAspectRatio='none'
					style={{ display: "block" }}>
					<path
						fill='#F48E6E'
						d='M0,50L48,56.7C96,63,192,77,288,75C384,73,480,53,576,43.3C672,33,768,33,864,41.7C960,50,1056,67,1152,71.7C1248,77,1344,70,1392,66.7L1440,63L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z'></path>
				</svg>
			</div>
		</div>
	);
}
