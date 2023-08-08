import Standings from "../components/Standings";
import { useLoaderData, useLocation, json } from "react-router-dom";

export default function LeagueTable() {
	const location = useLocation();
	const [, , leagueId] = location.pathname.split("/");
	const data = useLoaderData();
	const table = data.data;

	return <Standings leagueId={leagueId} standings={table} />;
}

export async function loader({ params }) {
	const leagueId = params.leagueId;
	const endpoint = `/soccer/table/${leagueId}/2023`;
	const response = await fetch(
		"https://soccer-app-backend.onrender.com" + endpoint
	);

	if (!response.ok) {
		throw json({ message: "Could not fetch table." }, { status: 500 });
	} else {
		return response;
	}
}

// Add deferring to show spinner when data is being fetched
// Add errorLoader util to prevent invalid requests of tables for unsupported leagues
