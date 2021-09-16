import React, { useContext } from 'react';
import localeContext from '../../context/localeContext';
import './footer.scss';

export default function Footer() {
	const locales = useContext(localeContext);
	return (
		<div className="ibm-gtc-footer">
			{
				locales.footer.links.map((locale, key) => {
					return (
						<a key={key} href={locale.link} target="_blank" rel="noreferrer">
							{locale.text}
						</a>
					)
				})
			}
		</div>
	)
}