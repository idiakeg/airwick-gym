import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import logo from "../../images/logo.png";
import { links } from "../../data";
import "./Navbar.css";

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);
	return (
		<nav>
			<div className="container nav__container">
				<Link to="/" onClick={() => setIsNavShowing(false)}>
					<img src={logo} alt="Nav Link" className="logo" />
				</Link>
				<ul
					className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
				>
					{links.map(({ name, path }, index) => {
						return (
							<li key={index} onClick={() => setIsNavShowing((prev) => !prev)}>
								<NavLink
									to={path}
									className={({ isActive }) =>
										isActive ? "active-nav" : undefined
									}
								>
									{name}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<button
					className="nav__toggle-btn"
					onClick={() => setIsNavShowing((prev) => !prev)}
				>
					{isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
