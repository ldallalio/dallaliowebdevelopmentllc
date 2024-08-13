import React from "react";
import Image from "next/image";
import logo from "../assests/DWD_DWD_Logo.png";
import styles from "../../styles/Home.module.scss";
// import { CiMenuBurger } from "react-icons/ci";
function header() {
	return (
		<div
			className="header"
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0 2rem 0 2rem",
			}}
		>
			<div
				className="logo"
				style={{
					left: 0,
					fontSize: "2rem",
					fontWeight: "bold",
				}}
			>
				<Image src={logo} alt="logo" width={150} height={150} />
			</div>
			<div
				className={`flex ${styles.navMenu}`}
				style={{
					justifyContent: "space-around",
					width: "50%",
					color: "#f4f4f4",
				}}
			>
				<a href="#" className={styles.activeMenu}>
					Home
				</a>
				<a className={styles.navMenu} href="#">
					Services
				</a>
				<a href="#" className={styles.navMenu}>
					Portfolio
				</a>
				<a className={styles.navMenu} href="#">
					Pricing
				</a>
				<a className={styles.navMenu} href="#">
					Contact
				</a>
			</div>
			<div className={styles.mobileMenuButton}>
				<button
					style={{
						backgroundColor: "#E87A00",
						color: "#f4f4f4",
						border: "none",
						padding: "0.5rem 1rem",
						borderRadius: "5px",
					}}
				>
					{/* <CiMenuBurger /> */}
				</button>
			</div>
			<div>
				<button
					style={{
						border: "1px solid #E87A00",
						padding: "0.5rem 1rem",
						borderRadius: "5px",
					}}
					className={styles.contactButton}
				>
					Contact Us
				</button>
			</div>
		</div>
	);
}

export default header;
