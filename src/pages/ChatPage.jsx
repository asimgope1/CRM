import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

function ChatPage() {
	return (
		<Layout title="Chat Page" showHeader={false}>
			<div className="container mt-4">
				<div className="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
					<div>
						<h4 className="mb-1">
							Chat 
							<span className="badge badge-soft-primary ms-2">15</span>
						</h4>
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb mb-0 p-0">
								<li className="breadcrumb-item">
									<Link to="/">Home</Link>
								</li>
								
								<li className="breadcrumb-item active" aria-current="page">
									Chat 
								</li>
							</ol>
						</nav>
					</div>
				</div>

				{/* Example content */}
				<div className="card p-4">
					<p>This is the Call History content section.</p>
				</div>
			</div>
		</Layout>
	);
}

export default ChatPage;
