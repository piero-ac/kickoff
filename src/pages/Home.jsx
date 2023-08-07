import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";

export default function Home() {
	return (
		<Container className="mt-2">
			<Row>
				<Col s={12} md={3}>
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>Leagues</Accordion.Header>
							<Accordion.Body>
								<Stack gap={2} className="">
									<Link
										to="/league/epl"
										className="link-underline link-underline-opacity-0"
									>
										Premier League
									</Link>
									<Link
										to="/league/laliga"
										className="link-underline link-underline-opacity-0"
									>
										La Liga
									</Link>
									<Link
										to="/league/seriea"
										className="link-underline link-underline-opacity-0"
									>
										Serie A
									</Link>
									<Link
										to="/league/bundesliga"
										className="link-underline link-underline-opacity-0"
									>
										Bundesliga
									</Link>
									<Link
										to="/league/ligue1"
										className="link-underline link-underline-opacity-0"
									>
										Ligue 1
									</Link>
								</Stack>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
				<Col s={12} md={{ span: 8, offset: 1 }}>
					Home Page
				</Col>
			</Row>
		</Container>
	);
}
