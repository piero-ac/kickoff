import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LeagueNavigation from "../components/LeagueNavigation";
import LeagueInfo from "../components/LeagueInfo";

export default function League() {
	const params = useParams();

	return (
		<Container className="my-5">
			<Row className="justify-content-evenly">
				<LeagueNavigation selected={params.leagueId} />
				<LeagueInfo />
			</Row>
		</Container>
	);
}
