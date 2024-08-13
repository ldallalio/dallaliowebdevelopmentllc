import * as React from "react";
import TopMenu from "./components/TopMenu";
import HeroSection from "./components/HomePageComponents/HeroSection";
import bgImage from "./assests/Bg.png";
import Head from "next/head";
import ServicesOffered from "./components/HomePageComponents/ServicesOffered";
import SocialLinks from "./components/HomePageComponents/SocialLinks";

export default function Home() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${bgImage.src})`,
					backgroundSize: "cover",
					backgroundColor: "white",
					height: '1250px'
				}}
			>
				<Head>
					<title>Dallalio Web Dev</title>
					<meta name="description" content="Dallalio Web Dev" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<TopMenu />
				<HeroSection />
				<SocialLinks />
			</div>
			<ServicesOffered />
		</>
	);
}
