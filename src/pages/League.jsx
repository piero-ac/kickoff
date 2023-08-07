import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function League() {
	const params = useParams();

	return (
		<Container>
			<Row>
				<Col>{params.leagueId}</Col>
			</Row>
		</Container>
	);
}
