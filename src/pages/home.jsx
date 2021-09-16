import React from "react";
import Header from "../components/header/header";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";

export default function HomePage() {
	return (
		<div className="ibm-grc-main-container">
			<Header />
			<Body />
			<Footer />
		</div>
	)
}