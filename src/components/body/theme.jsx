import React, { useContext } from 'react';
import { Row, Column, Accordion, AccordionItem } from 'carbon-components-react';
import localeContext from '../../context/localeContext';

export default function Theme() {
	const locale = useContext(localeContext);

	const handleImage = (e) => {
		console.info(e);
	}

	return (
		<div className="ibm-gtc-theme ibm-gtc-page-padding">
			<Row>
				<Column lg={4} xlg={4} md={2} sm={1}>
					<div className="ibm-gtc-theme-title">{locale.theme.title}</div>
				</Column>
				<Column lg={12} xlg={12} md={6} sm={3}>
					<div>
						<div className="ibm-gtc-theme-text">
							{locale.theme.text}
						</div>
						<div>
							<Accordion>
								{
									locale.theme.themes.map((theme, key) => {
										const img = require(`../../assets/theme/${theme.img}.svg`).default || '';
										return (
											<AccordionItem id={"theme" + key} onClick={(e) => handleImage(e)} key={key} title={
												<div>
													<img src={img} alt={''}></img>
													{theme.title}
												</div>
												}>
												<p>{theme.desc}</p>
											</AccordionItem>
										)
									})
								}
							</Accordion>
						</div>
					</div>
				</Column>
			</Row>
		</div>
	)
}
