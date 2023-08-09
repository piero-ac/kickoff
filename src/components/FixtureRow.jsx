/* eslint-disable react/prop-types */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function FixtureRow({ match }) {
	return (
		<Row
			style={{ width: "98%" }}
			className="bg-success rounded-1 my-2 mx-auto py-1"
		>
			<Col xs={3} lg={2}>
				<div>{formatDateToDDMMM(new Date(match.date))}</div>
				<div>TBD</div>
			</Col>
			<Col className="d-none d-lg-block">
				<Row>
					<Col className="d-flex gap-3">
						<div>
							<img
								className="img-fluid"
								width="40px"
								src={match.homeTeam.logo}
								alt={`${match.homeTeam.name} Logo`}
							/>
						</div>
						<div>
							<p className="fs-5">{match.homeTeam.name}</p>
						</div>
					</Col>
					<Col className="d-flex gap-3">
						<div>
							<img
								className="img-fluid"
								width="40px"
								src={match.awayTeam.logo}
								alt={`${match.awayTeam.name} Logo`}
							/>
						</div>
						<div>
							<p className="fs-5">{match.awayTeam.name}</p>
						</div>
					</Col>
				</Row>
			</Col>
			<Col xs={2} className="d-lg-none">
				<div>
					<img
						className="img-fluid"
						width="25px"
						src={match.homeTeam.logo}
						alt={`${match.homeTeam.name} Logo`}
					/>
				</div>
				<div>
					<img
						className="img-fluid"
						width="25px"
						src={match.awayTeam.logo}
						alt={`${match.awayTeam.name} Logo`}
					/>
				</div>
			</Col>
			<Col className="d-lg-none">
				<div>{match.homeTeam.name}</div>
				<div>{match.awayTeam.name}</div>
			</Col>
			<Col xs={1} className="text-dark my-auto text-center">
				<FontAwesomeIcon icon={faChevronRight} />
			</Col>
		</Row>
	);
}

function formatDateToDDMMM(date) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const day = date.getDate();
	const month = months[date.getMonth()];

	return `${day} ${month}`;
}
