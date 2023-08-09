import { json, redirect } from "react-router-dom";

const availableLeagues = ["61", "39", "140", "78", "135"];

export function errorLoader(leagueId) {
	if (!availableLeagues.includes(leagueId))
		throw json({ message: "Invalid League" }, { status: 404 });
	return redirect(`/league/${leagueId}/overview`);
}
