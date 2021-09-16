
import React, { useContext } from "react";
import { Column, Row } from "carbon-components-react";
import localeContext from "../../context/localeContext";
import { ImageHolder } from "../imagesHolder";


export default function LearningOppurtunity() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-lear-oppr ibm-gtc-page-padding">
			<Row>
				<Column sm={4} md={2} lg={4} xlg={4} max={4}>
					<h1>
						{locale.oppurtunities.header}
					</h1>
				</Column>
				{
					locale.oppurtunities.skills.map((skills, key) => {
						return (
							<Column key={key} sm={4} md={2}>
								<div className="ibm-gtc-lrng-module">
									<img src={ImageHolder[skills.image]} alt={skills.header}></img>
									<h2>{skills.header}</h2>
									<p>{skills.desc}</p>
								</div>
							</Column>
						)
					})
				}
			</Row>
		</div>
	)
}