
import React, { useContext } from "react";
import { Column, Row } from "carbon-components-react";
import localeContext from "../../context/localeContext";
import { User16, Calendar16 } from "@carbon/icons-react";

export default function Schedule() {
	const locale = useContext(localeContext);
	return (
		<div className="ibm-gtc-schedule ibm-gtc-page-padding">
			{
				locale.schedule.map((schedule, key) => {
					return (
						<Row key={key} className={schedule.classname}>
							<Column sm={4} md={2} lg={4} xlg={4} max={4}>
								<h1>
									{schedule.header}
								</h1>
							</Column>
							{
								schedule.events.map((events, eventKey) => {
									return (
										<Column key={eventKey} sm={4} md={2}>
											<div className="ibm-gtc-scheduler-card">
												<div className="ibm-gtc-scheduler-hdr">
													{events.header}
												</div>
												<div className="ibm-gtc-scheduler-body">
													<h2>{events.cardHeader}</h2>
													<p>{events.cardDesc}</p>
													{events.cardUser &&
														<div className="ibm-gtc-user-sec">
															<User16 />
															<span>{events.cardUser}</span>
														</div>
													}
													<div className="ibm-gtc-user-sec">
														<Calendar16 />
														<span>{events.cardSchedule}</span>
													</div>
												</div>
											</div>
										</Column>
									)
								})
							}
						</Row>
					)
				})
			}
		</div>
	)
}