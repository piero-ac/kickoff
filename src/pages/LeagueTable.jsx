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
	// Check if data is available in localStorage
	const storedStandingsData = localStorage.getItem(`standings_${leagueId}`);
	const storedStandingsDataExpiration = localStorage.getItem(
		`standings_${leagueId}_expiration`
	);
	const currentTime = new Date().getTime();

	if (
		storedStandingsData &&
		storedStandingsDataExpiration &&
		currentTime >= storedStandingsDataExpiration
	) {
		return JSON.parse(storedStandingsData);
	}

	// Otherwise, fetch from the backend
	const endpoint = `/soccer/table/${leagueId}/2023`;
	const response = await fetch("http://localhost:3000" + endpoint);

	if (!response.ok) {
		throw json({ message: "Could not fetch table." }, { status: 500 });
	} else {
		const resData = await response.json();
		const { data, expiration } = resData;

		// Store fetched data and its expiration
		localStorage.setItem(`standings_${leagueId}`, JSON.stringify(data));
		localStorage.setItem(`standings_${leagueId}_expiration`, expiration);

		return data;
	}
}

export function loader({ params }) {
	return defer({
		verifyId: errorLoader(params.leagueId),
		standings: loadStandings(params.leagueId),
	});
}
