import React, { useContext, useRef, useEffect, useState } from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import localeContext from '../../context/localeContext';
import Program from "./program";
import Contact from "./contact";
import KnowAboutIBM from './knowmore';
import LearningOppurtunity from './learning';
import Badges from './badges';
import Schedule from './schedule';
import Connect from './connect';
import FAQ from './faq';
import './body.scss';
import './modules.scss';

export default function Body() {
	const locales = useContext(localeContext);
	const refObject = {
		themes: useRef(),
		learningOppr: useRef(),
		schedule: useRef(),
		faq: useRef(),
		contact: useRef()
	}

	const [selectedTab, setSelectedTab] = useState('');

	//handlers
	const scrollToDiv = (ref) => {
		let reference = ref?.reference;
		if (refObject[reference]) {
			setSelectedTab(refObject[reference]);
		}
	}

	//effects
	useEffect(() => {
		if (selectedTab.current?.offsetTop) {
			window.scrollTo(0, selectedTab.current.offsetTop);
		}
	}, [selectedTab]);

	return (
		<div className="ibm-gtc-body">
			<Tabs type="container" className="ibm-gtc-body-tabs ibm-gtc-page-padding">
				{
					locales.tabs.map((tab, key) => {
						return (
							<Tab key={key} id={"tab-" + key} onClick={() => scrollToDiv(tab)} label={
								<div><div>{tab.prefix}</div>{tab.name}</div>
							}></Tab>
						)
					})
				}
			</Tabs>
			<div className="ibm-gtc-program-container" ref={refObject.themes}>
				<Program />
			</div>
			<div className="ibm-gtc-knowmore-container">
				<KnowAboutIBM />
			</div>
			<div className="ibm-gtc-learnOppr-container" ref={refObject.learningOppr}>
				<LearningOppurtunity />
			</div>
			<div className="ibm-gtc-badges-container">
				<Badges />
			</div>
			<div className="ibm-gtc-schedule-container" ref={refObject.schedule}>
				<Schedule />
			</div>
			<div className="ibm-gtc-connect-container">
				<Connect />
			</div>
			<div className="ibm-gtc-faq-container" ref={refObject.faq}>
				<FAQ />
			</div>
			<div className="ibm-gtc-contact-container" ref={refObject.contact}>
				<Contact />
			</div>
		</div>
	)
}
