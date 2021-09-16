
import React, { useContext } from "react";
import { Column, Row } from "carbon-components-react";
import localeContext from "../../context/localeContext";

export default function KnowAboutIBM() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-knowmr ibm-gtc-page-padding">
			<Row>
				<Column sm={4} md={2} lg={4} xlg={4}>
					<p>
						{locale.about.knowMore}
					</p>
				</Column>
				<Column sm={4} md={2} lg={4} xlg={4}>
					<p className="ibm-gtc-knowmr-hdr">
						{locale.about.header}
					</p>
					<p className="ibm-gtc-knowmr-subtext">
						{locale.about.desc}
					</p>
				</Column>
				<Column sm={4} md={4} lg={8} xlg={8}>
					<iframe src="https://www.youtube.com/embed/jQTPO-rSNWg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</Column>
			</Row>
		</div>
	)
}