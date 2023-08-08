/* eslint-disable react/prop-types */
import StandingsRow from "./StandingsRow";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

export default function Standings({ leagueId, standings }) {
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
					{standings.map((team) => (
						<StandingsRow key={team.teamId} team={team} leagueId={leagueId} />
					))}
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
