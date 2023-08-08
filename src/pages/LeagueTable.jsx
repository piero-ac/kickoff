import Standings from "../components/Standings";
import {
	useLoaderData,
	useLocation,
	json,
	defer,
	Await,
} from "react-router-dom";
import { errorLoader } from "../util/errorLoader";
import { Suspense } from "react";
import LoadingSpinner from "../UI/Spinner";

export default function LeagueTable() {
	const location = useLocation();
	const [, , leagueId] = location.pathname.split("/");
	const { standings } = useLoaderData();

	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Await resolve={standings}>
				{(loadedStandings) => (
					<Standings leagueId={leagueId} standings={loadedStandings} />
				)}
			</Await>
		</Suspense>
	);
}

async function loadStandings(leagueId) {
	const endpoint = `/soccer/table/${leagueId}/2023`;
	const response = await fetch(
		"https://soccer-app-backend.onrender.com" + endpoint
	);

	if (!response.ok) {
		throw json({ message: "Could not fetch table." }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.data;
	}
}

export function loader({ params }) {
	return defer({
		verifyId: errorLoader(params.leagueId),
		standings: loadStandings(params.leagueId),
	});
}
