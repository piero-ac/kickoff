/* eslint-disable react/prop-types */
import FixtureRow from "./FixtureRow";
import Container from "react-bootstrap/Container";

export default function Fixtures({ fixtures }) {
	return (
		<Container fluid>
			{fixtures.matches.length > 0 &&
				fixtures.matches.map((match, index) => {
					return <FixtureRow key={index} match={match} />;
				})}
			{fixtures.matches.length === 0 && <p>No fixtures available yet.</p>}
		</Container>
	);
}
