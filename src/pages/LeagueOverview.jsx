import Container from "react-bootstrap/Container";
import { useParams, defer, json, Await, useLoaderData } from "react-router-dom";
import { getLeagueName } from "../util/leagueName";
import { getDate } from "../util/getDate";
import { errorLoader } from "../util/errorLoader";
import { Suspense } from "react";
import { filterMatchesByDate } from "../util/filterMatches";
import LoadingSpinner from "../UI/Spinner";
import Fixtures from "../components/Fixtures";
import Standings from "../components/Standings";

export default function LeagueOverview() {
	const { todaysFixtures, standings } = useLoaderData();
	const params = useParams();
	const leagueName = getLeagueName(params.leagueId);

	return (
		<Container fluid className="mt-3">
			<h2 className="text-success text-center">{leagueName}</h2>
			<h4 className="text-light text-center">Fixtures</h4>
			<Suspense fallback={<LoadingSpinner />}>
				<Await resolve={todaysFixtures}>
					{(loadedFixtures) => (
						<Fixtures fixtures={loadedFixtures} message={"No fixtures today"} />
					)}
				</Await>
			</Suspense>
			<h4 className="text-light text-center">Table</h4>
			<Suspense fallback={<LoadingSpinner />}>
				<Await resolve={standings}>
					{(loadedStandings) => (
						<Standings
							standings={loadedStandings}
							leagueId={params.leagueId}
							noText={true}
							limit={5}
						/>
					)}
				</Await>
			</Suspense>
		</Container>
	);
}

// Copied from LeagueTable
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
		console.log("Using localStorage for standings");
		return JSON.parse(storedStandingsData);
	}

	// Otherwise, fetch from the backend
	const endpoint = `/soccer/table/${leagueId}/2023`;
	const response = await fetch("http://localhost:3000" + endpoint);

	if (!response.ok) {
		throw json({ message: "Could not fetch table." }, { status: 500 });
	} else {
		console.log("Using backend for standings");
		const resData = await response.json();
		const { data, expiration } = resData;

		// Store fetched data and its expiration
		localStorage.setItem(`standings_${leagueId}`, JSON.stringify(data));
		localStorage.setItem(`standings_${leagueId}_expiration`, expiration);

		return data;
	}
}

async function loadDayFixtures(leagueId) {
	// Check if data is available in localStorage
	const storedFixturesData = localStorage.getItem(`fixtures_${leagueId}`);
	const storedFixturesDataExpiration = localStorage.getItem(
		`fixtures_${leagueId}_expiration`
	);
	const currentTime = new Date().getTime();

	if (
		storedFixturesData &&
		storedFixturesDataExpiration &&
		currentTime >= storedFixturesDataExpiration
	) {
		// console.log(storedFixturesData);
		const { matches } = JSON.parse(storedFixturesData);
		// console.log(matches);
		const filteredMatches = filterMatchesByDate(matches, getDate());
		return { matches: filteredMatches };
	}

	// Otherwise, fetch from the backend
	const endpoint = `/soccer/matches/${leagueId}/2023`;
	const response = await fetch("http://localhost:3000" + endpoint);

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch today's fixtures" },
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		const { data, expiration } = resData;

		// Store fetched data and its expiration
		localStorage.setItem(`fixtures_${leagueId}`, JSON.stringify(data));
		localStorage.setItem(`fixtures_${leagueId}_expiration`, expiration);
		const filteredMatches = filterMatchesByDate(data.matches, getDate());
		return { matches: filteredMatches };
	}
}

export function loader({ params }) {
	return defer({
		verifyId: errorLoader(params.leagueId),
		todaysFixtures: loadDayFixtures(params.leagueId),
		standings: loadStandings(params.leagueId),
	});
}
