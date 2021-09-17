import React, { useContext } from 'react';
import { Column, Row, Accordion, AccordionItem } from 'carbon-components-react';
import localeContext from '../../context/localeContext';

export default function FAQ() {
	const locale = useContext(localeContext);

	const handleAccordion = (e) => {
		console.log(e);
		e.target.classList.toggle("active");
		var panel = e.target.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	}

	return (
		<div className="ibm-gtc-faq ibm-gtc-page-padding">
			<Row>
				<Column sm={4} md={2} lg={4} xlg={4} max={4}>
					<h1>
						{locale.faq.header}
					</h1>
				</Column>
				<Column>
					{
						locale.faq.section.map((section, sectionKey) => {
							return (
								<div key={sectionKey}>
									<button className="accordion" onClick={(e) => handleAccordion(e)}>{section.title}</button>
									<div className="panel">
										<Accordion>
											{
												section.content.map((content, key) => {
													return (
														<AccordionItem key={key} title={"Q: " + content.question}>
															<p>{"A: " + content.answer}</p>
														</AccordionItem>
													)
												})
											}
										</Accordion>
									</div>
								</div>
							)
						})
					}
				</Column>
			</Row>
		</div>
	)
}
