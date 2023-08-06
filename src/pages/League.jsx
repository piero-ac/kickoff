import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

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
