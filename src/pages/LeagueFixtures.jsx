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
	const endpoint = `/soccer/matches/${leagueId}/2023`;
	const response = await fetch(
		"https://soccer-app-backend.onrender.com" + endpoint
	);

	if (!response.ok) {
		throw json({ message: "Could not fetch fixtures." }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.data;
	}
}

export function loader({ params }) {
	return defer({
		verifyId: errorLoader(params.leagueId),
		fixtures: loadFixtures(params.leagueId),
	});
}
