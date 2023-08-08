import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useLoaderData, useLocation } from "react-router-dom";

export default function LeagueTable() {
	const location = useLocation();
	const [, , leagueId] = location.pathname.split("/");
	const data = useLoaderData();
	const table = data.data;

	const getRankClassName = (rank, leagueId) => {
		if (rank === 1) return "text-success";

		if (leagueId === "78") {
			if (rank === 16) {
				return "text-warning";
			} else if (rank >= 17) {
				return "text-danger";
			} else {
				return "";
			}
		} else if (leagueId === "61") {
			if (rank >= 16) {
				return "text-danger";
			} else {
				return "";
			}
		} else {
			return rank > 17 ? "text-danger" : "";
		}
	};

	return (
		<Container fluid className="mx-1 my-2">
			<Table variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th colSpan={2}>Team</th>
						<th>P</th>
						<th>W</th>
						<th>D</th>
						<th>L</th>
						<th className="d-none d-md-table-cell">F</th>
						<th className="d-none d-md-table-cell">A</th>
						<th>GD</th>
					</tr>
				</thead>
				<tbody>
					{table.map((team) => {
						const rankClassName = getRankClassName(team.teamRank, leagueId);

						return (
							<tr key={team.teamId}>
								<td className={rankClassName}>{team.teamRank}</td>
								<td className="d-none d-md-table-cell">
									<img
										className="img-fluid"
										width="25px"
										src={team.teamLogo}
										alt={`${team.teamName} Logo`}
									/>
								</td>
								<td className="d-table-cell d-md-none"></td>
								<td>{team.teamName}</td>
								<td>{team.totalPoints}</td>
								<td>{team.totalGamesWon}</td>
								<td>{team.totalGamesDraw}</td>
								<td>{team.totalGamesLose}</td>
								<td className="d-none d-md-table-cell">{team.totalGoalsFor}</td>
								<td className="d-none d-md-table-cell">
									{team.totalGoalsAgainst}
								</td>
								<td>{team.totalGoalsDiff}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			{leagueId === "78" && (
				<>
					<p className="text-warning">Rank 16 Goes to Relegation Playoffs</p>
					<p className="text-danger">Ranks 17 and 18 are relegated</p>
				</>
			)}
			{leagueId !== "78" && (
				<>
					<p className="text-danger">Bottom Three are relegated</p>
				</>
			)}
		</Container>
	);
}

export async function loader({ params }) {
	const leagueId = params.leagueId;
	const endpoint = `/soccer/table/${leagueId}/2023`;
	const response = await fetch(
		"https://soccer-app-backend.onrender.com" + endpoint
	);

	if (!response.ok) {
		//....
		console.log("could not e fetched");
	} else {
		return response;
	}
}

// For Premier League (39)
