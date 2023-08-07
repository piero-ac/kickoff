import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

export default function LeagueOverview() {
	const params = useParams();

	return (
		<Container fluid>
			<h1 className="text-light">Overview {params.leagueId}</h1>
		</Container>
	);
}
