import React, { useContext } from 'react';
import { Link } from 'carbon-components-react';
import localeContext from '../../context/localeContext';
import { Email16 } from '@carbon/icons-react';

export default function Contact() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-contact ibm-gtc-page-padding">
			<div className="ibm-gtc-contact-title">{locale.contact.title}</div>
			<div>
				<Email16 /> {locale.contact.info.text}
				<Link href={locale.contact.info.link} aria-label="IBM" className="ibm-gtc-contact-link">
					{locale.contact.info.linkText}
				</Link>
			</div>
		</div>
	)
}
