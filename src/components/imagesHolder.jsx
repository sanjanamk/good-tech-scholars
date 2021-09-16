
import * as React from 'react';
import learning from "../assets/learning/learning.png";
import technical from "../assets/learning/technical.png";
import professional from "../assets/learning/professional.png";
import { ToolBox32, EdtLoop32, IbmCloud32, Chat32, Loop32 } from "@carbon/icons-react";


export const ImageHolder = {
	"learning": learning,
	"technical": technical,
	"professional": professional
}

export const CarbonIcons = {
	"toolbox": ToolBox32,
	"editloop": EdtLoop32,
	"ibmcloud": IbmCloud32,
	"chat": Chat32,
	"loop": Loop32
}

export const LinkedinIcon = () => {
	return (
		<svg version="1.1" id="icon" x="0px" y="0px"
			width="24px" height="24px" viewBox="0 0 32 32" xmlSpace="preserve">
			<path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4
			H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3
			H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z
			"/>
		</svg>)
}
export function IconWrapper(icon, className = '') {
	let CarbonIcon = CarbonIcons[icon];
	return (
		CarbonIcon ? <CarbonIcon className={className} /> : ''
	);
}