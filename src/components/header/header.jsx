import React from 'react';
import { Row, Column, Link, TextInput } from 'carbon-components-react';
import { Search16 } from "@carbon/icons-react";
import HeadBand from './headband';
import logo from '../../assets/header/logo.png';
import './header.scss';

export default function Header() {
	let searchVal = "";

	const handleSearchInput = (input) => {
		searchVal = input.target.value;
	}

	const handleSearch = () => {
		if (searchVal) {
			window.open('https://www.ibm.com/search?lang=en&cc=us&q=' + searchVal, '_blank');
		} else {
			window.open('https://www.ibm.com/search?lang=en&cc=us', '_blank');
		}
	}

	return (
		<div className="ibm-gtc-header-container">
			<div className="ibm-gtc-header-nav">
				<Row>
					<Column lg={14} xlg={14} md={6} sm={3}>
						<Link href="/" aria-label="IBM" className="ibm-gtc-header-link">
							IBM<img src={logo} alt="IBM" />
						</Link>
					</Column>
					<Column className="ibm-gtc-header-search-col" lg={2} xlg={2} md={2} sm={1}>
						<div className="ibm-gtc-header-search">
							<TextInput placeholder="Search" light id="ibm-gtc-search" labelText="" onChange={(e) => handleSearchInput(e)}/>
							<Search16 onClick={() => handleSearch()} />
						</div>
					</Column>
				</Row>
			</div>
			<div className="ibm-gtc-hdr-headbnd-sec">
				<HeadBand />
			</div>
		</div>
	)
}