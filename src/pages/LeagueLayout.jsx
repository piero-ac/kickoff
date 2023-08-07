import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LeagueNavigation from "../components/LeagueNavigation";
import LeagueInfo from "../components/LeagueInfo";

export default function LeagueLayout() {
	const params = useParams();

	return (
		<Container className="my-5">
			<Row className="justify-content-evenly">
				<LeagueNavigation />
				<LeagueInfo leagueId={params.leagueId}>
					<Outlet />
				</LeagueInfo>
			</Row>
		</Container>
	);
}
