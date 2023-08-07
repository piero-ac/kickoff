/* eslint-disable react/prop-types */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export default function LeagueInfo() {
	return (
		<Col s={12} md={8} className="bg-dark px-2 py-3 rounded-3">
			<Row>
				<Col gap={3}>
					<Stack
						direction="horizontal"
						gap={3}
						className="justify-content-center justify-content-md-start"
					>
						<Button className="rounded-4 px-3" variant="secondary">
							Overview
						</Button>
						<Button className="rounded-4 px-3" variant="secondary">
							Fixtures
						</Button>
						<Button className="rounded-4 px-3" variant="secondary">
							Table
						</Button>
					</Stack>
				</Col>
			</Row>
		</Col>
	);
}
