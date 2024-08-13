import React from "react";
import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import HeroImage from "../../assests/dwdHeroImage.png";

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					padding: "2rem",
					alignItems: "center",
				}}
			>
				<h1
					style={{
						textAlign: "left",
						fontSize: "4rem",
						padding: "2rem",
						width: "650px",
						fontWeight: "bold",
					}}
				>
					Grow Your Business with{" "}
					<span style={{ color: "#E87A00" }}>Dallalio Web Dev</span>
				</h1>
				<div>
					<p
						style={{
							textAlign: "left",
							fontSize: "1.8rem",
							padding: "2rem",
							width: "510px",
						}}
					>
						We provide the services you need to take your product and brand to
						the next level
					</p>
					<button
						className={styles.btn}
						style={{
							display: "block",
							marginLeft: "2rem",
							padding: "1rem 2rem",
							backgroundColor: "#E87A00",
							color: "#f4f4f4",
							border: "none",
							borderRadius: "5px",
							fontSize: "1.2rem",
						}}
					>
						Get Started &rarr;
					</button>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "2rem",
				}}
			>
				<Image src={HeroImage} alt="hero" width={1200} height={500} />
			</div>
		</div>
	);
};

export default HeroSection;
