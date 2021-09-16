import React, { useContext } from 'react';
import { Button } from 'carbon-components-react';
import { ChevronRight16 } from '@carbon/icons-react';
import localeContext from '../../context/localeContext';
import banner from "../../assets/video/banner.mp4";

export default function HeadBand() {
	const locales = useContext(localeContext);

	const handleButton = () => {
		window.open(locales.headband.button.link, '_blank');
	}

	return (
		<React.Fragment>
			<div className="ibm-gtc-video-cntr">
				<video autoPlay muted loop className="ibm-gtc-video">
					<source src={banner} type="video/mp4" />
				</video>
			</div>
			<div className="ibm-gtc-headband">
				<div className="ibm-gtc-headband-content">
					<div className="ibm-gtc-headband-title">
						<h1>{locales.headband.title}</h1>
						<h2>{locales.headband.subtitle}</h2>
					</div>
					<p>
						{locales.headband.content}
					</p>
					<Button renderIcon={ChevronRight16} iconDescription={locales.headband.button.text} onClick={() => handleButton()}>
						{locales.headband.button.text}
					</Button>
				</div>


			</div>
		</React.Fragment>
	)
}
