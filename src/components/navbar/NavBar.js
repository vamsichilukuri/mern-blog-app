import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<div>
			<ul className="nav justify-content-end">
				<li className="nav-item">
					<Link className="nav-link active" to="/">
						All posts
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/create-post">
						Create post
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
