import { Suspense } from "react";
import LoadingSpinner from "../UI/Spinner";
import { json, useLoaderData, defer, Await } from "react-router-dom";
import Fixtures from "../components/Fixtures";
import { errorLoader } from "../util/errorLoader";

export default function LeagueFixtures() {
	const { fixtures } = useLoaderData();

	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Await resolve={fixtures}>
				{(loadedMatches) => <Fixtures fixtures={loadedMatches} />}
			</Await>
		</Suspense>
	);
}

async function loadFixtures(leagueId) {
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
		const { matches } = JSON.parse(storedFixturesData);
		return { matches };
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
		return { matches: data.matches };
	}
}

export function loader({ params }) {
	return defer({
		verifyId: errorLoader(params.leagueId),
		fixtures: loadFixtures(params.leagueId),
	});
}
