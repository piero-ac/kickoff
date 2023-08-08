/* eslint-disable react/prop-types */

export default function StandingsRow({ leagueId, team }) {
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

	const rankClassName = getRankClassName(team.teamRank, leagueId);
	return (
		<tr>
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
			<td className="d-none d-md-table-cell">{team.totalGoalsAgainst}</td>
			<td>{team.totalGoalsDiff}</td>
		</tr>
	);
}
