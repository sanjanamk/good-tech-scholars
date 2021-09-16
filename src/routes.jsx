import React, { Suspense } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import LoadingPage from "./pages/loading";

const HomePage = React.lazy(() => import('./pages/home'));
export default function Routes() {
	return (
		<Router>
			<Suspense fallback={<LoadingPage />}>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</Suspense>
		</Router >
	);
}