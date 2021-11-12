
import React, { useContext } from "react";
import { Column, Row, Link } from "carbon-components-react";
import localeContext from "../../context/localeContext";
import { LinkedinIcon } from "../imagesHolder";

export default function Connect() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-connect ibm-gtc-page-padding">
			<Row>
				<Column sm={4} md={2} lg={4} xlg={4} max={4}>
					<h1>
						{locale.connect.header}
					</h1>
				</Column>
				<Column>
					<Row>
						{
							locale.connect.profiles.map((profiles, key) => {
								const img = require(`../../assets/connect/${profiles.img}.png`).default || '';
								return (
									<Column key={key} sm={2} md={2} lg={3} xlg={3} max={3}>
										<div className="ibm-gtc-connect-module">
											<img src={img} alt={''}></img>
											<div className="ibm-gtc-connect-user">
												<span>
													{profiles.name}
												</span>
												<Link href={profiles.link} target={"_blank"}>{LinkedinIcon()}</Link>
											</div>
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