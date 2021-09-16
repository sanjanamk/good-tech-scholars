
import React, { useContext } from "react";
import { Column, Row } from "carbon-components-react";
import localeContext from "../../context/localeContext";
import { IconWrapper } from "../imagesHolder";

export default function Badges() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-badges ibm-gtc-page-padding">
			<Row>
				<Column sm={4} md={2} lg={4} xlg={4} max={4}>
					<h1>
						{locale.badges.header}
					</h1>
				</Column>
				<Column>
					<Row>
						{
							locale.badges.content.map((badges, key) => {
								return (
									<Column key={key} sm={4} md={2} lg={3} xlg={3} max={3}>
										<div className="ibm-gtc-badges-module">
											<a href={badges.link} target="_blank" rel="noreferrer">
												<div>
													{IconWrapper(badges.img)}
												</div>
												<h2>{badges.text}</h2>
											</a>
										</div>
									</Column>
								)
							})
						}
					</Row>
				</Column>
			</Row>
		</div>
	)
}