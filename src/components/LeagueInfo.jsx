/* eslint-disable react/prop-types */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Link, useLocation } from "react-router-dom";

export default function LeagueInfo({ leagueId, children }) {
	const location = useLocation();
	const [, , , contentType] = location.pathname.split("/");

	return (
		<Col s={12} md={8} className="bg-dark px-2 py-3 rounded-3">
			<Row>
				<Col gap={3}>
					<Stack
						direction="horizontal"
						gap={3}
						className="justify-content-center justify-content-md-start"
					>
						<Link
							to={`/league/${leagueId}/overview`}
							className={
								"btn rounded-4 px-3" +
								(contentType === "overview"
									? "btn btn-success active"
									: "btn btn-secondary")
							}
						>
							Overview
						</Link>
						<Link
							to={`/league/${leagueId}/fixtures`}
							className={
								"btn rounded-4 px-3" +
								(contentType === "fixtures"
									? "btn btn-success active"
									: "btn btn-secondary")
							}
						>
							Fixtures
						</Link>
						<Link
							to={`/league/${leagueId}/table`}
							className={
								"btn rounded-4 px-3" +
								(contentType === "table"
									? "btn btn-success active"
									: "btn btn-secondary")
							}
						>
							Table
						</Link>
					</Stack>
				</Col>
			</Row>
			<Row>{children}</Row>
		</Col>
	);
}
